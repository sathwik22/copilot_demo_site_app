import { useState } from 'react';
import {
    CodeBracketIcon,
    ChatBubbleBottomCenterTextIcon,
    LightBulbIcon,
    CommandLineIcon,
    PlayCircleIcon,
    ClockIcon,
    TagIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    WrenchScrewdriverIcon,
    CheckCircleIcon,
    CalendarIcon,
    TrophyIcon,
    UserGroupIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';
import VideoPlayer from './components/VideoPlayer';
import FeedbackBoard from './components/FeedbackBoard';
function App() {
    const [activeTab, setActiveTab] = useState('modes');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const upcomingEvents = [
        {
            title: 'AI Innovation Ideation Week',
            date: 'November mid week, 2025',
            type: 'Virtual Event',
            description:
                'Join us for an exciting ideation session focusing on AI innovation across various domains. Share your groundbreaking ideas in areas like Machine Learning, Computer Vision, NLP, and AI-assisted Development. Shape the future of AI applications at Bosch!',
            highlights: [
                'Explore diverse AI domains and use-cases',
                'Collaborate with AI enthusiasts across Bosch',
                'Get feedback from AI experts and leaders',
                'Best ideas advance to the hackathon phase',
            ],
            icon: SparklesIcon,
            color: 'blue',
        },
        {
            title: 'Bosch AI Hackathon 2025',
            date: 'November (end of the month), 2025',
            type: 'Virtual Event',
            description:
                'Transform innovative AI ideas into reality! Join our intensive hackathon to build cutting-edge solutions in Machine Learning, Deep Learning, Computer Vision, NLP, or any AI domain. Create impactful applications that can revolutionize how we work at Bosch.',
            highlights: [
                'Build AI-powered prototypes',
                'Access to cloud computing resources',
                'Mentorship from AI experts',
                'Networking with tech leaders',
                'Attractive rewards for winners',
            ],

            icon: TrophyIcon,
            color: 'purple',
        },
    ];

    const installationSteps = [
        {
            title: 'Step 1: OneIdM Portal Request',
            description: 'Request GitHub Copilot access through OneIdM Portal',
            items: [
                'Go to OneIdM Portal',
                'Click on "New request"',
                'Search for "IDM2BCD_BDC_Githubcom_CoPilot"',
                'Select GitHubcom_Copilot and add to cart',
                'Self-assign the licensing',
            ],
            image: '/images/copilot-request-oneidm.png',
        },
        {
            title: 'Step 2: GitHub Account Setup',
            description:
                'Create and configure your GitHub account with Bosch credentials',
            items: [
                'Create GitHub account with non NT-ID username',
                'Use your "<nt-id>@bosch.com" as email',
                'Save the recovery codes provided',
                'Enable 2FA using SMS option in settings',
                'Login to https://github.com',
            ],
        },
        {
            title: 'Step 3: Access Confirmation',
            description: 'Complete the GitHub Copilot activation process',
            items: [
                'Wait for email confirmation from GitHub',
                'Click the "Join" button in the email',
                'Receive final confirmation email',
                'Verify Copilot access in your GitHub account',
            ],
            image: '/images/copilot-access-granted.png',
        },
        {
            title: 'Step 4: IDE Integration',
            description: 'Set up GitHub Copilot in your preferred IDE',
            items: [
                'Choose your preferred IDE (VS Code, IntelliJ, etc.)',
                'Install the GitHub Copilot extension',
                'Sign in to GitHub in your IDE',
                'Verify Copilot integration',
            ],
        },
    ];

    const tutorials = [
        {
            title: 'Building this Website with Copilot',
            description:
                'Learn how we created this modern React website using GitHub Copilot, featuring Tailwind CSS integration and responsive design',
            videoUrl:
                'https://drive.google.com/file/d/1FS4S_5qGh-njnC02pD7-Pj4ExZuhXGX-/view?usp=drive_link',
            tags: ['React', 'Tailwind CSS', 'Copilot'],
            duration: '14:42',
            chapters: [
                'Project Setup with Copilot',
                'UI Component Creation',
                'Styling with Tailwind',
                'State Management',
            ],
        },
        {
            title: 'UI Enhancements & Tutorial Section',
            description:
                'See how we enhanced the UI by adding an interactive tutorial section with video playback, chapter listings, and responsive design using Tailwind CSS',
            videoUrl:
                'https://drive.google.com/file/d/1m4wtBaEzrlyaA0DVcTdntpMPCtAsNgJg/view?usp=drive_link',
            tags: ['UI/UX', 'Tailwind CSS', 'React Components'],
            duration: '5:00',
            chapters: [
                'Video Player Integration',
                'Modal Implementation',
                'Chapter Layout Design',
                'Responsive Styling',
            ],
        },
        {
            title: 'Writing Unit Tests with Copilot',
            description:
                'Discover how to leverage GitHub Copilot to write comprehensive unit tests for React components and JavaScript functions',
            videoUrl:
                'https://drive.google.com/file/d/1OmxV-1G50V-wB30uIOATTeDACI6oLcee/view?usp=drive_link',
            tags: ['Jest', 'React Testing Library', 'Unit Testing'],
            duration: '5:00',
            chapters: [
                'Test Setup with Jest',
                'Component Testing',
                'Mocking with Copilot',
                'Test Coverage Analysis',
            ],
        },

        // {
        //     title: 'Project Documentation & Architecture',
        //     description:
        //         'Comprehensive guide on creating project documentation using Mermaid diagrams and GitHub Copilot',
        //     videoUrl: '/documentation.mp4',
        //     tags: ['Mermaid', 'Documentation', 'Architecture'],
        //     duration: '20:15',
        //     diagrams: {
        //         architecture: `
        //             graph TD
        //                 A[React App] --> B[Components]
        //                 B --> C[Mode Section]
        //                 B --> D[Models Section]
        //                 B --> F[Tutorial Section]
        //         `,
        //         workflow: `
        //             sequenceDiagram
        //                 participant U as User
        //                 participant C as Copilot
        //                 participant R as React App
        //                 U->>C: Write Code
        //                 C->>R: Generate Components
        //                 R->>U: Display UI
        //         `,
        //     },
        //     chapters: [
        //         'Documentation Strategy',
        //         'Mermaid Diagram Creation',
        //         'Architecture Overview',
        //         'Workflow Documentation',
        //     ],
        // },
    ];

    const features = {
        modes: [
            {
                title: 'Agent Mode',
                description:
                    'AI-powered autonomous coding sessions that handle errors and iterate until completion',
                benefits: [
                    'Automatic error handling',
                    'Multi-step task execution',
                    'Terminal output monitoring',
                ],
            },
            {
                title: 'Edit Mode',
                description:
                    'Conversational, step-by-step coding experience with direct code modifications',
                benefits: [
                    'Review changes in context',
                    'Multi-turn conversations',
                    'Direct code edits',
                ],
            },
            {
                title: 'Chat Mode',
                description:
                    'Interactive AI assistance with context-aware responses',
                benefits: [
                    'Workspace-aware responses',
                    'Code explanation',
                    'Best practices guidance',
                ],
            },
        ],
        models: [
            {
                name: 'Sonnet-4',
                description:
                    'Latest and most advanced code-specialized model with monthly quota',
                use_cases: [
                    'Complex architectural decisions',
                    'Limited to 500 requests/month',
                    'High-precision responses',
                ],
                subscription: 'Standard',
                rateLimit: '500/month',
            },
            {
                name: 'GPT-4 Turbo',
                description:
                    'Cutting-edge general-purpose model with unlimited usage',
                use_cases: [
                    'Complex problem solving',
                    'Unlimited requests',
                    'Detailed explanations',
                ],
                subscription: 'Unlimited',
                rateLimit: 'Unlimited',
            },
            {
                name: 'Gemini Pro 2.5',
                description: 'High-performance model with daily request limits',
                use_cases: [
                    'Advanced code generation',
                    'Limited to 200 requests/day',
                    'Technical documentation',
                ],
                subscription: 'Standard',
                rateLimit: '200/day',
            },
            {
                name: 'GPT-4',
                description: 'High-capability model with unlimited access',
                use_cases: [
                    'Complex problem solving',
                    'Unlimited requests',
                    'Detailed documentation',
                ],
                subscription: 'Unlimited',
                rateLimit: 'Unlimited',
            },
            {
                name: 'Sonnet-3.5',
                description: 'Fast and efficient model with hourly rate limits',
                use_cases: [
                    'Quick code completion',
                    'Limited to 50 requests/hour',
                    'Basic documentation',
                ],
                subscription: 'Standard',
                rateLimit: '50/hour',
            },
            {
                name: 'GPT-3.5 Turbo',
                description:
                    'Efficient general-purpose model with unlimited usage',
                use_cases: [
                    'Basic code completion',
                    'Unlimited requests',
                    'Quick responses',
                ],
                subscription: 'Unlimited',
                rateLimit: 'Unlimited',
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        GitHub Copilot Features
                    </h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('installation')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'installation'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Installation Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('modes')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'modes'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Copilot Modes
                    </button>
                    <button
                        onClick={() => setActiveTab('models')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'models'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Available Models
                    </button>

                    <button
                        onClick={() => setActiveTab('tutorials')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'tutorials'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Video Tutorials
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'events'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Upcoming Events
                    </button>
                    <button
                        onClick={() => setActiveTab('feedback')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            activeTab === 'feedback'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Feedback
                    </button>
                </nav>

                {activeTab === 'modes' && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.modes.map((mode) => (
                            <div
                                key={mode.title}
                                className="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                            {mode.title === 'Agent Mode' && (
                                                <CommandLineIcon className="w-6 h-6 text-indigo-600" />
                                            )}
                                            {mode.title === 'Edit Mode' && (
                                                <CodeBracketIcon className="w-6 h-6 text-indigo-600" />
                                            )}
                                            {mode.title === 'Chat Mode' && (
                                                <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-indigo-600" />
                                            )}
                                        </div>
                                        <h3 className="ml-4 text-lg font-medium text-gray-900">
                                            {mode.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        {mode.description}
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        {mode.benefits.map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="flex items-center text-sm text-gray-500"
                                            >
                                                <LightBulbIcon className="w-4 h-4 mr-2 text-indigo-500" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'models' && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.models.map((model) => (
                            <div
                                key={model.name}
                                className="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {model.name}
                                        </h3>
                                        <div className="flex gap-2">
                                            <span
                                                className={`px-3 py-1 text-sm font-medium rounded-full ${
                                                    model.subscription ===
                                                    'Unlimited'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-blue-100 text-blue-700'
                                                }`}
                                            >
                                                {model.rateLimit}
                                            </span>
                                            <span
                                                className={`px-3 py-1 text-sm font-medium rounded-full ${
                                                    model.subscription ===
                                                    'Unlimited'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-blue-100 text-blue-700'
                                                }`}
                                            >
                                                {model.subscription}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        {model.description}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-medium text-gray-900">
                                            Best for:
                                        </h4>
                                        <ul className="mt-2 space-y-2">
                                            {model.use_cases.map((use_case) => (
                                                <li
                                                    key={use_case}
                                                    className="flex items-center text-sm text-gray-500"
                                                >
                                                    <LightBulbIcon className="w-4 h-4 mr-2 text-indigo-500" />
                                                    {use_case}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'subscriptions' && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.subscriptionTiers.map((tier) => (
                            <div
                                key={tier.name}
                                className="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div className="p-6">
                                    <h3
                                        className={`text-lg font-medium mb-4 ${
                                            tier.name.includes('Enterprise')
                                                ? 'text-purple-700'
                                                : tier.name.includes('Pro')
                                                ? 'text-blue-700'
                                                : 'text-green-700'
                                        }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start space-x-3 text-sm text-gray-600"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-500 mt-0.5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'tutorials' && (
                    <div className="space-y-8">
                        {tutorials.map((tutorial, index) => (
                            <div
                                key={tutorial.title}
                                className="bg-white rounded-lg shadow overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {tutorial.title}
                                            </h3>
                                            <p className="mt-2 text-gray-600">
                                                {tutorial.description}
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-4">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <ClockIcon className="w-4 h-4 mr-1" />
                                                    {tutorial.duration}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <TagIcon className="w-4 h-4 text-gray-400" />
                                                    {tutorial.tags.map(
                                                        (tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                                            >
                                                                {tag}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setSelectedVideo(
                                                    tutorial.videoUrl
                                                )
                                            }
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
                                            title="Play Video"
                                        >
                                            <PlayCircleIcon className="w-6 h-6" />
                                        </button>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                                            Chapters:
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {tutorial.chapters.map(
                                                (chapter, idx) => (
                                                    <li
                                                        key={chapter}
                                                        className="flex items-center text-sm text-gray-600"
                                                    >
                                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-2 text-xs font-medium">
                                                            {idx + 1}
                                                        </span>
                                                        {chapter}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'installation' && (
                    <div className="space-y-8">
                        {installationSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <span className="text-indigo-600 font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {step.description}
                                            </p>
                                            <ul className="space-y-3">
                                                {step.items.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                                                        <span className="text-gray-600">
                                                            {item ===
                                                            'Go to OneIdM Portal' ? (
                                                                <a
                                                                    href="https://oneidm.bosch.com/oneidm/html/rbwebshop/#/start/new-request"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-indigo-600 hover:text-indigo-800"
                                                                >
                                                                    {item}
                                                                </a>
                                                            ) : (
                                                                item
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                                {index === 0 && (
                                                    <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 max-w-2xl mx-auto">
                                                        <img
                                                            src="/images/copilot-request-oneIDM.png"
                                                            alt="Copilot Request in OneIdM"
                                                            className="w-full h-auto max-h-[400px] object-contain"
                                                        />
                                                    </div>
                                                )}
                                                {index === 2 && (
                                                    <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 max-w-2xl mx-auto">
                                                        <img
                                                            src="/images/copilot-access-granted.png"
                                                            alt="GitHub Account Setup"
                                                            className="w-full h-auto max-h-[400px] object-contain"
                                                        />
                                                    </div>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="bg-yellow-50 rounded-lg p-6 mt-4">
                            <div className="flex items-center space-x-3">
                                <LightBulbIcon className="h-6 w-6 text-yellow-500" />
                                <h4 className="text-lg font-medium text-yellow-900">
                                    Quick Tips
                                </h4>
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center space-x-2 text-yellow-700">
                                    <span>•</span>
                                    <span>
                                        Make sure to save your GitHub recovery
                                        codes
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2 text-yellow-700">
                                    <span>•</span>
                                    <span>
                                        Use your Bosch email format:
                                        "&lt;nt-id&gt;@bosch.com"
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2 text-yellow-700">
                                    <span>•</span>
                                    <span>
                                        Remember to enable 2FA using SMS for
                                        enhanced security
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'events' && (
                    <div className="space-y-8">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.title}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
                            >
                                <div
                                    className={`bg-gradient-to-r ${
                                        event.color === 'blue'
                                            ? 'from-blue-500 to-indigo-600'
                                            : 'from-purple-500 to-pink-600'
                                    } px-6 py-4`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            {event.title}
                                        </h3>
                                        <event.icon className="h-8 w-8 text-white opacity-90" />
                                    </div>
                                    <div className="mt-2 flex items-center space-x-4">
                                        <div className="flex items-center text-white opacity-90">
                                            <CalendarIcon className="h-5 w-5 mr-2" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-white opacity-90">
                                            <UserGroupIcon className="h-5 w-5 mr-2" />
                                            {event.type}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        {event.description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">
                                                Event Highlights:
                                            </h4>
                                            <ul className="space-y-2">
                                                {event.highlights.map(
                                                    (highlight, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center text-gray-600"
                                                        >
                                                            <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500" />
                                                            {highlight}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        {event.rewards && (
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3">
                                                    Rewards:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {event.rewards.map(
                                                        (reward, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start"
                                                            >
                                                                <TrophyIcon
                                                                    className={`h-5 w-5 mr-2 ${
                                                                        idx ===
                                                                        0
                                                                            ? 'text-yellow-500'
                                                                            : idx ===
                                                                              1
                                                                            ? 'text-gray-400'
                                                                            : 'text-orange-500'
                                                                    }`}
                                                                />
                                                                <div>
                                                                    <span className="font-medium text-gray-900">
                                                                        {
                                                                            reward.place
                                                                        }
                                                                    </span>
                                                                    <p className="text-gray-600">
                                                                        {
                                                                            reward.prize
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'feedback' && <FeedbackBoard />}

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl w-full">
                            <div className="p-4 bg-gray-100 flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {tutorials.find(
                                        (t) => t.videoUrl === selectedVideo
                                    )?.title || 'Video Tutorial'}
                                </h3>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="relative"
                                style={{ paddingBottom: '56.25%' }}
                            >
                                <VideoPlayer videoPath={selectedVideo} />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
