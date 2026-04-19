SPOT Workplace Management System
SPOT is a smart workplace management system that enables organizations to manage:
•	Seat reservations (hot desks)
•	Cafeteria menu and feedback
•	Employee presence and workspace usage
This product is delivered as a self-hosted solution, meaning your organization fully controls its data, infrastructure, and deployment.
________________________________________
📦 What’s Included
•	Source code (frontend application)
•	Database schema (database.sql)
•	Environment configuration template (.env.example)
•	Setup instructions (this document)
________________________________________
🧩 System Requirements
•	Node.js (v18 or higher)
•	npm (comes with Node.js)
•	A Supabase account (or self-hosted Supabase)
________________________________________
⚙️ Setup Instructions
1. Create a Supabase Project
Go to:
https://supabase.com
•	Create a new project
•	Wait until the project is ready
________________________________________
2. Setup Database
Open Supabase:
→ SQL Editor
→ Paste contents of database.sql
→ Run the script
This will create all required:
•	Tables
•	Relationships
•	Security policies
________________________________________
3. Get Supabase Credentials
Go to:
→ Project Settings → API
Copy:
•	Project URL
•	Anon Public Key
________________________________________
4. Configure Environment
Create a file:
.env
Copy from .env.example:
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
________________________________________
5. Install Dependencies
In project folder, run:
npm install
________________________________________
6. Run Application (Local)
npm run dev
Open in browser:
http://localhost:5173
________________________________________
7. Deploy (Production)
You can deploy using:
•	Vercel (recommended)
•	Netlify
•	Any internal server
Example (Vercel):
•	Connect GitHub repo
•	Add environment variables
•	Deploy
________________________________________
🔐 Authentication
SPOT supports:
•	Email/password login
•	Google SSO
•	Microsoft SSO
To enable SSO:
•	Configure providers in Supabase → Authentication → Providers
•	Add required credentials (Google Cloud / Azure)
________________________________________
👥 User Roles
•	User → Can book seats, view cafeteria, add comments
•	Admin → Can manage seats and system configuration
________________________________________
📊 Data Ownership
All data is stored in your Supabase project.
SPOT does not collect or store any external data.
________________________________________
⚠️ Important Notes
•	This is a licensed product (not open-source)
•	Redistribution or resale is not allowed
•	Custom modifications are allowed for internal use
________________________________________
🛠 Support
Support and customizations are available upon request.
________________________________________
🚀 Version
SPOT v1.0
________________________________________
© License
This software is licensed, not sold.
Use is permitted within your organization only.
Resale or redistribution is prohibited.

