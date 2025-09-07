# 🚀 OpenSource Issue Tracker

A modern, full-stack web application for tracking and discovering open source issues, with a special focus on Google Summer of Code (GSoC) organizations and their issues.

## ✨ Features

- 🔍 **Issue Discovery**: Browse and search through open source issues from various repositories
- 🏢 **OpenSource Organizations**: Dedicated section for Google Summer of Code participating organizations
- 📊 **Dashboard**: Comprehensive dashboard with filters and statistics
- 🎯 **Smart Filtering**: Filter issues by language, difficulty, labels, and more
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- ⚡ **Real-time Updates**: Live data from GitHub API
- 🎨 **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Animations**: Framer Motion
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Web Scraping**: Puppeteer, Playwright, Cheerio
- **Logging**: Winston
- **API**: GitHub REST API

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- GitHub Personal Access Token

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/OpenSourceIssueTracker.git
   cd OpenSourceIssueTracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:7000/api
   NEXT_PUBLIC_GITHUB_API_URL=https://api.github.com
   NEXT_PUBLIC_APP_NAME=OpenSource Issue Tracker
   NEXT_PUBLIC_APP_VERSION=1.0.0
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Backend Setup

1. **Navigate to the server directory**
   ```bash
   cd ../OpenSourceIssueTracker.server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file:
   ```env
   NODE_ENV=development
   PORT=7000
   FRONTEND_URL=http://localhost:3000
   DB_URL=mongodb://localhost:27017/opensource_issue_tracker
   GITHUB_TOKEN=your-github-personal-access-token
   GITHUB_API_URL=https://api.github.com
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
OpenSourceIssueTracker/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (root)/            # Main application routes
│   │   │   ├── _components/   # Page-specific components
│   │   │   ├── gsoc-issues/   # OpenSourceissues page
│   │   │   ├── gsoc-orgs/     # OpenSourceorganizations page
│   │   │   └── org/           # Organization detail pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── shared/           # Shared components
│   │   └── ui/               # UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── actions/              # Server actions
├── public/                   # Static assets
├── .env.example             # Environment variables template
└── README.md               # This file
```

## 🔑 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:7000/api` |
| `NEXT_PUBLIC_GITHUB_API_URL` | GitHub API URL | `https://api.github.com` |
| `NEXT_PUBLIC_APP_NAME` | Application name | `OpenSource Issue Tracker` |
| `NEXT_PUBLIC_APP_VERSION` | Application version | `1.0.0` |

## 🚀 Deployment

### Frontend (Vercel)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Backend (Railway/Heroku)

1. **Connect your repository**
2. **Set environment variables**
3. **Deploy** - The platform will build and deploy your Express server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub for providing the amazing API
- Google Summer of Code for inspiring this project
- The open source community for their contributions

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/OpenSourceIssueTracker/issues) page
2. Create a new issue if your question isn't answered
3. Contact the maintainers

---

**Happy Coding! 🎉**