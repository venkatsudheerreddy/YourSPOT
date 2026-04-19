import React, { useState, useEffect } from "react";
import { Mail, Lock, Loader2, AlertCircle, User } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import svgPaths from "../imports/svg-0ni18gzcjx";
import checkMailSvgPaths from "../imports/svg-mcvj28k4k";
import taglinePaths from "../imports/svg-n3coxjrths";
import spotLogo from "figma:asset/aa94aecb2134ca34a74296e5d0daa05734d1ae5a.png";

interface AuthScreenProps {
  onLoginSuccess: () => void;
  unconfirmedEmail?: string;
}

export function AuthScreen({ onLoginSuccess, unconfirmedEmail }: AuthScreenProps) {
  const [mode, setMode] = useState<"login" | "signup" | "email_confirmation">(
    unconfirmedEmail ? "email_confirmation" : "login"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState(unconfirmedEmail || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"google" | "microsoft" | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mode !== "login") return;

    let mounted = true;
    let redirected = false;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted || redirected) return;

      if (data.session && data.session.user.email_confirmed_at) {
        redirected = true;
        onLoginSuccess();
      }
    });

    return () => {
      mounted = false;
    };
  }, [mode, onLoginSuccess]);

  const handleOAuthLogin = async (provider: "google" | "azure") => {
    setOauthLoading(provider === "google" ? "google" : "microsoft");
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;

      // OAuth redirect will happen automatically
      // After redirect, session will be checked in useEffect
    } catch (err: any) {
      console.error("OAuth error:", err);
      setError(err.message || "OAuth login failed");
      setOauthLoading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "signup") {
        console.log("Attempting signup for:", email);
        
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });

        if (error) throw error;

        // If session is null, it means email confirmation is required
        if (data.session && data.session.user.email_confirmed_at) {
          onLoginSuccess();
        } else if (data.session || data.user) {
           // Session exists but email not confirmed, OR no session but user created
          setMode("email_confirmation");
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.session) {
           if (data.session.user.email_confirmed_at) {
             onLoginSuccess();
           } else {
             setMode("email_confirmation");
           }
        }
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const Logo = () => (
    <div className="flex flex-col gap-[16px] items-center w-[120px] mb-8" data-name="Logo">
      <div className="h-[56px] relative shrink-0 w-[120px]" data-name="SPOT">
        <img src={spotLogo} alt="SPOT" className="w-full h-full object-contain" />
      </div>
      <div className="relative w-full h-[9px]" data-name="Tagline">
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 font-[family-name:var(--font-primary)]">
      {mode !== "email_confirmation" && <Logo />}
      <div className="w-full max-w-[400px] bg-card rounded-[24px] p-8 shadow-[var(--shadow-card)] flex flex-col gap-6">

        
        {mode === "email_confirmation" ? (
           <div className="flex flex-col items-center w-full" data-name="Content">
              {/* Icon */}
              <div className="h-[208px] relative shrink-0 w-[211px] mb-[30px]" data-name="Icon">
                  <div className="absolute inset-[-45.67%_-51.66%_-66.35%_-53.08%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 441">
                      <g id="Icon">
                        <g filter="url(#filter0_d_18264_179)" id="Ellipse 695">
                          <path d={checkMailSvgPaths.p15771e00} fill="var(--fill-0, #1CC97B)" />
                        </g>
                        <path d={checkMailSvgPaths.p2598c180} id="Ellipse 696" stroke="var(--stroke-0, #1CC97B)" strokeWidth="0.5" />
                        <path d={checkMailSvgPaths.p2f4218c0} fill="var(--fill-0, white)" id="Union" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter0_d_18264_179" width="432" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="20" />
                          <feGaussianBlur stdDeviation="62" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.788235 0 0 0 0 0.482353 0 0 0 0.7 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18264_179" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_18264_179" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-[24px] items-center justify-center text-center w-full mb-[40px]">
                  <p className="font-[family-name:var(--font-primary)] font-semibold text-[20px] text-foreground tracking-[-0.8px] uppercase whitespace-pre">Check your mail</p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-[family-name:var(--font-primary)] font-normal text-muted-foreground text-[12px] whitespace-pre">We’ve sent a confirmation link to</p>
                    <p className="font-[family-name:var(--font-primary)] font-semibold text-foreground text-[14px] whitespace-pre">{email}</p>
                  </div>

                  <div className="flex flex-col items-center justify-center max-w-[280px]">
                     <p className="text-[12px] text-center font-[family-name:var(--font-primary)] text-muted-foreground leading-normal">
                        Please check your inbox. If you don’t see the email, also check your <span className="font-semibold">Spam or Promotions</span> folder to confirm your email.
                     </p>
                  </div>
              </div>

              {/* Button */}
              <div className="w-full">
                <button 
                    onClick={async () => {
                        await supabase.auth.signOut();
                        setMode("login");
                        window.location.reload(); 
                    }}
                    className="bg-primary w-full h-[64px] rounded-[16px] flex items-center justify-center active:scale-[0.98] transition-transform"
                >
                    <p className="font-[family-name:var(--font-primary)] font-normal text-[18px] text-primary-foreground">Back to login</p>
                </button>
              </div>
           </div>
        ) : (
           <>
              {/* Header Removed - replaced by Logo outside the card */}

              {/* Error / Message */}
              {error && (
                <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              {/* OAuth Buttons - Only show in login mode */}
              {mode === "login" && (
                <div className="flex flex-col gap-3">
                  {/* Google Login Button */}
                  <button
                    type="button"
                    onClick={() => handleOAuthLogin("google")}
                    disabled={oauthLoading !== null || loading}
                    className="w-full h-[50px] bg-white hover:bg-gray-50 border-2 border-border rounded-[12px] font-medium text-[16px] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {oauthLoading === "google" ? (
                      <Loader2 className="animate-spin w-5 h-5 text-foreground" />
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.8055 10.2292C19.8055 9.55176 19.7501 8.86926 19.6319 8.2041H10.2002V12.0167H15.6014C15.3779 13.2916 14.6568 14.4092 13.6096 15.0875V17.586H16.8275C18.7172 15.8449 19.8055 13.2724 19.8055 10.2292Z" fill="#4285F4"/>
                          <path d="M10.2002 20.0004C12.9515 20.0004 15.2707 19.1049 16.8318 17.5865L13.614 15.088C12.7364 15.6972 11.6033 16.0431 10.2045 16.0431C7.54388 16.0431 5.28792 14.2828 4.51805 11.9165H1.19727V14.4923C2.79207 17.6596 6.30829 20.0004 10.2002 20.0004Z" fill="#34A853"/>
                          <path d="M4.51368 11.9162C4.0815 10.6413 4.0815 9.26455 4.51368 7.98967V5.41382H1.19723C-0.39907 8.58796 -0.39907 12.3177 1.19723 15.4918L4.51368 11.9162Z" fill="#FBBC04"/>
                          <path d="M10.2002 3.95805C11.6871 3.93555 13.1216 4.47214 14.2108 5.45886L17.0583 2.60158C15.1824 0.838102 12.732 -0.0661893 10.2002 -0.0383889C6.30829 -0.0383889 2.79207 2.30238 1.19727 5.47378L4.51372 8.04963C5.2793 5.67905 7.53956 3.95805 10.2002 3.95805Z" fill="#EA4335"/>
                        </svg>
                        <span className="text-foreground">Continue with Google</span>
                      </>
                    )}
                  </button>

                  {/* Microsoft Login Button */}
                  <button
                    type="button"
                    onClick={() => handleOAuthLogin("azure")}
                    disabled={oauthLoading !== null || loading}
                    className="w-full h-[50px] bg-white hover:bg-gray-50 border-2 border-border rounded-[12px] font-medium text-[16px] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {oauthLoading === "microsoft" ? (
                      <Loader2 className="animate-spin w-5 h-5 text-foreground" />
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0H9.52381V9.52381H0V0Z" fill="#F25022"/>
                          <path d="M10.4762 0H20V9.52381H10.4762V0Z" fill="#7FBA00"/>
                          <path d="M0 10.4762H9.52381V20H0V10.4762Z" fill="#00A4EF"/>
                          <path d="M10.4762 10.4762H20V20H10.4762V10.4762Z" fill="#FFB900"/>
                        </svg>
                        <span className="text-foreground">Continue with Microsoft</span>
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-[1px] bg-border"></div>
                    <span className="text-muted-foreground text-[12px]">or</span>
                    <div className="flex-1 h-[1px] bg-border"></div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Name Input - Only for Signup */}
                {mode === "signup" && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-foreground text-[14px] font-medium ml-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full h-[50px] pl-12 pr-4 rounded-[12px] border border-border bg-secondary text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Email Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-[14px] font-medium ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full h-[50px] pl-12 pr-4 rounded-[12px] border border-border bg-secondary text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-[14px] font-medium ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-[50px] pl-12 pr-4 rounded-[12px] border border-border bg-secondary text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full h-[50px] bg-primary hover:bg-primary/90 active:scale-[0.98] text-primary-foreground rounded-[12px] font-medium text-[16px] transition-all flex items-center justify-center shadow-[var(--shadow-glow)]"
                >
                  {loading ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    mode === "login" ? "Sign In" : "Sign Up"
                  )}
                </button>

              </form>

              {/* Toggle Mode */}
              <div className="flex items-center justify-center gap-1 text-[14px]">
                <span className="text-muted-foreground">
                  {mode === "login" ? "Don't have an account?" : "Already have an account?"}
                </span>
                <button
                  onClick={() => {
                      setMode(mode === "login" ? "signup" : "login");
                      setError(null);
                  }}
                  className="text-primary font-semibold hover:underline"
                >
                  {mode === "login" ? "Sign up" : "Log in"}
                </button>
              </div>
           </>
        )}
      </div>
    </div>
  );
}
