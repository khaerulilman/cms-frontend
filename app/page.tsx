import Link from "next/link";

// Icon Components
const DatabaseIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const KeyIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const LayoutIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
);

const CubeIcon = () => (
  <svg
    className="w-8 h-8 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="glass-card rounded-2xl p-6 group cursor-pointer">
    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 icon-glow">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

// Step Card Component
const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="relative">
    <div className="glass-card rounded-2xl p-6 cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 text-white font-bold text-lg icon-glow">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Pricing Card Component
const PricingCard = ({
  title,
  price,
  features,
  isPrimary = false,
}: {
  title: string;
  price: string;
  features: string[];
  isPrimary?: boolean;
}) => (
  <div
    className={`rounded-2xl p-8 ${
      isPrimary ? "gradient-border bg-slate-900/50" : "glass-card"
    }`}
  >
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold gradient-text">{price}</span>
      {price !== "Free" && <span className="text-slate-400">/month</span>}
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-slate-300">
          <CheckCircleIcon />
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 rounded-xl font-medium btn-glow ${
        isPrimary
          ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
          : "bg-slate-800 text-white border border-slate-700 hover-glow"
      }`}
    >
      Get Started
    </button>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) => (
  <div className="glass-card rounded-2xl p-6 cursor-pointer">
    <div className="flex gap-1 mb-4">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
    <p className="text-slate-300 mb-6 leading-relaxed">&quot;{content}&quot;</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-slate-400 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const features = [
    {
      icon: <DatabaseIcon />,
      title: "No Backend Needed",
      description:
        "Forget about complex server setup. Our API handles all your portfolio data storage and retrieval seamlessly.",
    },
    {
      icon: <KeyIcon />,
      title: "Simple API Keys",
      description:
        "Generate secure API keys with one click. Integrate your portfolio data anywhere with RESTful endpoints.",
    },
    {
      icon: <LayoutIcon />,
      title: "Visual Content Editor",
      description:
        "Intuitive drag-and-drop interface to manage your projects, experiences, and skills without any coding.",
    },
    {
      icon: <ShieldIcon />,
      title: "Secure & Private",
      description:
        "Enterprise-grade security with encrypted data storage. Your portfolio content is always protected.",
    },
    {
      icon: <CloudIcon />,
      title: "Cloud Hosted",
      description:
        "Always available, always fast. Your content is served from global CDN for lightning-fast access.",
    },
    {
      icon: <RocketIcon />,
      title: "Instant Deploy",
      description:
        "Update your portfolio content and see changes reflected instantly across all your connected platforms.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description:
        "Sign up in seconds with your email. No credit card required to get started.",
    },
    {
      number: "2",
      title: "Add Your Content",
      description:
        "Use our visual editor to add projects, experiences, skills, and other portfolio data.",
    },
    {
      number: "3",
      title: "Get Your API Key",
      description:
        "Generate a secure API key to access your portfolio data from anywhere.",
    },
    {
      number: "4",
      title: "Integrate Anywhere",
      description:
        "Use our REST API to display your portfolio content on any website or app.",
    },
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "Free",
      features: [
        "Unlimited Portfolio Project",
        "100 API Requests/day",
        "Basic Content Types",
        "Community Support",
      ],
      isPrimary: false,
    },
    // {
    //   title: "Pro",
    //   price: "$9",
    //   features: [
    //     "Unlimited Projects",
    //     "10,000 API Requests/day",
    //     "Custom Content Types",
    //     "Priority Support",
    //     "Analytics Dashboard",
    //   ],
    //   isPrimary: true,
    // },
    // {
    //   title: "Enterprise",
    //   price: "$29",
    //   features: [
    //     "Everything in Pro",
    //     "Unlimited API Requests",
    //     "Team Collaboration",
    //     "White-label Solution",
    //     "Dedicated Support",
    //   ],
    //   isPrimary: false,
    // },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Frontend Developer",
      content:
        "This CMS completely changed how I manage my portfolio. No more wrestling with databases or building admin panels. Just pure content management bliss.",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      content:
        "I can finally update my portfolio without strugling with databases. The API integration with my Next.js site was incredibly smooth.",
    },
    {
      name: "Michael Park",
      role: "Full Stack Developer",
      content:
        "The API is clean and well-documented. I integrated it with my portfolio in under an hour. Highly recommended for developers!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] bg-grid-pattern overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div
          className="absolute top-40 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm text-blue-300">Your Dash</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-20">
              Build Your Dynamic Portfolio,
              <br />
              <span className="gradient-text">
                Without Struggling With the Databasess
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your Dash is a headless content management system designed
              specifically for developers. Manage your portfolio content through
              an intuitive dashboard and access it via powerful REST APIs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium btn-glow shadow-lg shadow-blue-500/25"
              >
                Start Free Now
                <ArrowRightIcon />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 text-white rounded-xl font-medium border border-slate-700 hover-glow">
                <PlayIcon />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  10,000+
                </div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  50M+
                </div>
                <div className="text-slate-400 text-sm">API Requests/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  99.9%
                </div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Code Editor Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-sm text-slate-400">
                api-example.js
              </span>
            </div>
            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <pre className="text-slate-300">
                <code>
                  {`// Fetch your portfolio data with a simple API call
const response = await fetch('https://yourdash-virid.vercel.app/api/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const { projects } = await response.json();

// Use your data anywhere!
projects.forEach(project => {
  console.log(project.title, project.description);
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need,
              <br />
              <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Focus on building your portfolio website. Let us handle the
              backend complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Started in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From signup to API integration, we&apos;ve made the process as
              simple as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Manage all your portfolio content from one intuitive interface.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="glass-card rounded-2xl overflow-hidden glow-blue">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-sm text-slate-400">
                yourdash.io/projects/tableId
              </span>
            </div>

            <div className="flex bg-[#0a0f1a] min-h-[420px]">
              {/* Sidebar */}
              <div className="w-48 bg-[#111828] border-r border-slate-800/50 p-4 flex flex-col">
                <h3 className="text-sm font-semibold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Tables
                </h3>
                <div className="flex flex-col gap-2 flex-1">
                  {["Projects", "Certificates"].map((name, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded-xl text-sm border-2 transition-all ${
                        i === 0
                          ? "border-blue-500/30 bg-slate-800/50 text-white shadow-lg shadow-blue-500/10"
                          : "border-slate-700/30 text-slate-400"
                      }`}
                    >
                      {name}
                    </div>
                  ))}
                </div>
                <div className="mt-4 py-2 rounded-xl border border-dashed border-slate-700/50 text-slate-400 text-sm text-center">
                  + Add Table
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl">
                  {/* Table Header */}
                  <div className="flex justify-between items-center px-5 py-3 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                        Projects
                      </span>
                      <span className="text-slate-500 text-sm cursor-pointer">
                        ✎
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-medium">
                        Get Data
                      </span>
                      <span className="px-3 py-1.5 rounded-xl border border-dashed border-slate-700/50 text-slate-400 text-xs">
                        + Add Column
                      </span>
                    </div>
                  </div>

                  {/* Data Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-700/50">
                      <thead className="bg-slate-800/50">
                        <tr>
                          <th className="px-5 py-2.5 text-center text-[11px] font-semibold text-slate-300 uppercase tracking-wider border-r border-slate-700/50">
                            No
                          </th>
                          <th className="px-5 py-2.5 text-left text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                            <div className="flex items-center justify-between">
                              <span>Image</span>
                              <span className="text-red-500 text-[10px]">
                                ✕
                              </span>
                            </div>
                          </th>
                          <th className="px-5 py-2.5 text-left text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                            <div className="flex items-center justify-between">
                              <span>Description</span>
                              <span className="text-red-500 text-[10px]">
                                ✕
                              </span>
                            </div>
                          </th>
                          <th className="px-5 py-2.5 text-center text-[11px] font-semibold text-slate-300 uppercase tracking-wider border-l border-slate-700/50">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-900/20 divide-y divide-slate-700/50">
                        {[
                          { img: "💻", desc: "node js, rest api" },
                          { img: "🐳", desc: "postgre sql, docker" },
                          { img: "⚡", desc: "golang, vue" },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-slate-800/30 transition-colors"
                          >
                            <td className="px-5 py-3 text-sm text-slate-300 text-center border-r border-slate-700/50">
                              {i + 1}
                            </td>
                            <td className="px-5 py-3">
                              <div className="h-10 w-10 rounded border border-slate-700/50 bg-slate-700/30 flex items-center justify-center text-lg">
                                {row.img}
                              </div>
                            </td>
                            <td className="px-5 py-3 text-sm text-slate-300">
                              {row.desc}
                            </td>
                            <td className="px-5 py-3 text-center border-l border-slate-700/50">
                              <span className="text-red-500 text-xs font-medium">
                                DELETE
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add Row Footer */}
                  <div className="px-5 py-3 border-t border-slate-700/50 bg-slate-800/30">
                    <span className="py-1.5 px-3 rounded-xl border border-dashed border-slate-700/50 text-slate-400 text-xs">
                      + Add Row
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by <span className="gradient-text">Developers</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              See what developers are saying about Your Dash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Start for free
            </p>
          </div>

          <div
            className={`grid gap-6 ${
              pricingPlans.length === 1
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Simplify Your Portfolio?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have ditched the backend
                complexity. Start building your portfolio the easy way.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium btn-glow shadow-lg shadow-blue-500/25"
              >
                Get Started for Free
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold gradient-text mb-4">
                Your Dash
              </div>
              <p className="text-slate-400 text-sm">
                The headless CMS built for developer portfolios.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            &copy; 2026 Yourdash. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
