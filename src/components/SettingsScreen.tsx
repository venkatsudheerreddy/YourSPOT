import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { projectId } from "../utils/supabase/info";
import svgPaths from "../imports/svg-ok40tvmitm";
import imgSeat1 from "figma:asset/06a2dbc140d3345ec3be709f68f7f30332113bf9.png";
import imgSpot from "figma:asset/4433c75657723169ff9e363cc4087c0abc3ee0e6.png";

interface SettingsScreenProps {
  onBack?: () => void;
  onLogout: () => void;
  isAdmin: boolean;
  onNavigate: (screen: string) => void;
}

// --- Figma Components ---

function Empty() {
  return <div className="shrink-0 size-[40px]" data-name="empty" />;
}

function ChangeNameCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white relative rounded-[16px] shrink-0 w-full cursor-pointer active:scale-[0.99] transition-transform" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#88B5B9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change name</p>
        </div>
      </div>
    </div>
  );
}

function ChangePasswordCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white relative rounded-[16px] shrink-0 w-full cursor-pointer active:scale-[0.99] transition-transform" data-name="Change name">
      <div aria-hidden="true" className="absolute border border-[#88B5B9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Change password</p>
        </div>
      </div>
    </div>
  );
}

function LogoutCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white relative rounded-[16px] shrink-0 w-full cursor-pointer active:scale-[0.99] transition-transform" data-name="Logout">
      <div aria-hidden="true" className="absolute border border-[#88B5B9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Logout</p>
        </div>
      </div>
    </div>
  );
}

function DeleteAccountCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white relative rounded-[16px] shrink-0 w-full cursor-pointer active:scale-[0.99] transition-transform" data-name="Delete account">
      <div aria-hidden="true" className="absolute border border-[#88B5B9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b23] text-[12px] text-nowrap">Delete account</p>
        </div>
      </div>
    </div>
  );
}

function FooterFrame() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0 justify-center w-full">
      <p className="font-['Poppins',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#545864] text-[12px] text-nowrap">Built with</p>
      <div className="h-[10px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
          <path d={svgPaths.p3bb4b500} fill="url(#paint0_linear_18098_158)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18098_158" x1="6" x2="6" y1="-4.38287e-08" y2="10">
              <stop stopColor="#FF4674" />
              <stop offset="1" stopColor="#D7123C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
    </div>
  );
}

function IllustrationContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full mt-auto" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <div className="h-[120px] relative shrink-0 w-[120px]" data-name="seat 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[90%] left-[-24.95%] max-w-none top-[-2.55%] w-[150%] object-contain" src={imgSeat1} />
            </div>
          </div>
          <div className="h-[54px] relative shrink-0 w-[170px]" data-name="SPOT">
            <div className="absolute inset-0">
               <img src={imgSpot} className="h-full w-full object-contain" alt="SPOT" />
            </div>
          </div>
          <FooterFrame />
        </div>
      </div>
    </div>
  );
}

// --- Main Screen ---

export function SettingsScreen({ onLogout, isAdmin, onNavigate, onBack }: SettingsScreenProps) {
  // Dialog States
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Form States
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Password Form States
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Delete Account States
  const [deletePassword, setDeletePassword] = useState("");
  const [isPasswordUser, setIsPasswordUser] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const metadata = user.user_metadata;
      setName(metadata.full_name || metadata.display_name || user.email?.split('@')[0] || "");
      setIsPasswordUser(user.app_metadata.provider === "email");
    }
  };

  const handleUpdateName = async () => {
    if (!name.trim()) return;
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: name }
      });
      if (error) throw error;
      await supabase.auth.refreshSession();
      toast.success("Name updated successfully");
      setShowNameDialog(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to update name");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      if (error) throw error;
      toast.success("Password updated successfully");
      setShowPasswordDialog(false);
      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
    } catch (error: any) {
      toast.error(error.message || "Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleteError(null);
    setIsLoading(true);
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) throw new Error("No active session");

        if (isPasswordUser) {
            if (!deletePassword) {
                setDeleteError("Please enter your password to confirm");
                setIsLoading(false);
                return;
            }
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email: session.user.email!,
                password: deletePassword
            });
            if (signInError) throw new Error("Incorrect password");
        }

        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a3a1e6bf/delete-account`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${session.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: deletePassword })
        });

        if (!response.ok) {
            const text = await response.text();
            let errorMessage = "Failed to delete account";
            try {
                const data = JSON.parse(text);
                errorMessage = data.error || errorMessage;
            } catch (e) {
                if (text && text.length < 200) {
                    errorMessage = text;
                }
            }
            throw new Error(errorMessage);
        }

        await supabase.auth.signOut();
        onLogout(); 
    } catch (error: any) {
      setDeleteError(error.message || "Failed to delete account");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (onBack) onBack();
    else onNavigate("home");
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full font-['Poppins',sans-serif]" data-name="Settings">
      <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main container">
        
        {/* Header */}
        <div className="bg-white h-[72px] opacity-90 relative shrink-0 w-full" data-name="Top app bar">
          <div aria-hidden="true" className="absolute border-[#ddd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[56px] relative size-full">
              <Empty />
              <p className="title-small-heavy text-center text-nowrap">Settings</p>
              <Empty />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative shrink-0 w-full overflow-y-auto" data-name="Content">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full min-h-full">
              <ChangeNameCard onClick={() => setShowNameDialog(true)} />
              <ChangePasswordCard onClick={() => setShowPasswordDialog(true)} />
              <LogoutCard onClick={onLogout} />
              <DeleteAccountCard 
                  onClick={() => {
                      setShowDeleteDialog(true);
                      setDeletePassword("");
                      setDeleteError(null);
                  }} 
              />

              <IllustrationContent />
            </div>
          </div>
        </div>
        
      </div>

       {/* DIALOGS */}
       {/* Change Name Dialog */}
      <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Change Name</DialogTitle>
                <DialogDescription className="sr-only">Update your display name</DialogDescription>
            </DialogHeader>
            <div className="py-4">
                <Input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name"
                    autoFocus
                />
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => setShowNameDialog(false)}>Cancel</Button>
                <Button onClick={handleUpdateName} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
                </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Change Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
                <DialogDescription className="sr-only">Update your password</DialogDescription>
            </DialogHeader>
            <div className="py-4 flex flex-col gap-4">
                <Input 
                    type="password"
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)} 
                    placeholder="Current password"
                    autoFocus
                />
                <Input 
                    type="password"
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    placeholder="New password"
                />
                <Input 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder="Confirm new password"
                />
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => setShowPasswordDialog(false)}>Cancel</Button>
                <Button onClick={handleUpdatePassword} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : "Update Password"}
                </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Delete account</DialogTitle>
                <DialogDescription className="text-red-600 font-medium">
                    This action is permanent. All your bookings will be deleted and cannot be recovered.
                </DialogDescription>
            </DialogHeader>
            
            {isPasswordUser ? (
                <div className="py-2 flex flex-col gap-2">
                    <Input 
                        type="password"
                        value={deletePassword} 
                        onChange={(e) => setDeletePassword(e.target.value)} 
                        placeholder="Enter your password to confirm"
                        autoFocus
                    />
                    {deleteError && (
                        <p className="text-sm text-red-600 font-medium">{deleteError}</p>
                    )}
                </div>
            ) : (
                <div className="py-2 flex flex-col gap-2">
                    <p className="text-sm text-gray-500">
                        Please confirm you want to delete your account. You may be asked to re-authenticate.
                    </p>
                    {deleteError && (
                        <p className="text-sm text-red-600 font-medium">{deleteError}</p>
                    )}
                </div>
            )}

            <DialogFooter>
                <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
                <Button variant="destructive" onClick={handleDeleteAccount} disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : "Confirm delete"}
                </Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
