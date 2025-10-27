import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the Mermaid component since it's an external dependency
jest.mock('mermaid-react', () => ({
    __esModule: true,
    default: ({ chart }) => <div data-testid="mermaid-chart">{chart}</div>,
}));

describe('App Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    // Header tests
    describe('Header', () => {
        test('renders the main heading', () => {
            expect(
                screen.getByText('GitHub Copilot Features')
            ).toBeInTheDocument();
        });
    });

    // Navigation tests
    describe('Navigation', () => {
        test('renders all navigation buttons', () => {
            expect(screen.getByText('Copilot Modes')).toBeInTheDocument();
            expect(screen.getByText('Available Models')).toBeInTheDocument();
            expect(screen.getByText('Subscription Plans')).toBeInTheDocument();
            expect(screen.getByText('Video Tutorials')).toBeInTheDocument();
        });

        test('switches content when navigation buttons are clicked', () => {
            // Initially shows Modes content
            expect(screen.getByText('Agent Mode')).toBeInTheDocument();

            // Click Models tab
            fireEvent.click(screen.getByText('Available Models'));
            expect(screen.getByText('GPT-4 Turbo')).toBeInTheDocument();

            // Click Subscriptions tab
            fireEvent.click(screen.getByText('Subscription Plans'));
            expect(screen.getByText('Copilot Enterprise')).toBeInTheDocument();

            // Click Tutorials tab
            fireEvent.click(screen.getByText('Video Tutorials'));
            expect(
                screen.getByText('Building this Website with Copilot')
            ).toBeInTheDocument();
        });
    });

    // Modes section tests
    describe('Modes Section', () => {
        beforeEach(() => {
            fireEvent.click(screen.getByText('Copilot Modes'));
        });

        test('renders all mode cards', () => {
            expect(screen.getByText('Agent Mode')).toBeInTheDocument();
            expect(screen.getByText('Edit Mode')).toBeInTheDocument();
            expect(screen.getByText('Chat Mode')).toBeInTheDocument();
        });

        test('displays mode benefits', () => {
            expect(
                screen.getByText('Automatic error handling')
            ).toBeInTheDocument();
            expect(
                screen.getByText('Multi-turn conversations')
            ).toBeInTheDocument();
            expect(
                screen.getByText('Best practices guidance')
            ).toBeInTheDocument();
        });
    });

    // Models section tests
    describe('Models Section', () => {
        beforeEach(() => {
            fireEvent.click(screen.getByText('Available Models'));
        });

        test('renders all model cards', () => {
            expect(screen.getByText('GPT-4 Turbo')).toBeInTheDocument();
            expect(screen.getByText('GPT-4')).toBeInTheDocument();
            expect(screen.getByText('GPT-3.5 Turbo')).toBeInTheDocument();
        });

        test('displays subscription badges', () => {
            expect(screen.getByText('Enterprise')).toBeInTheDocument();
            expect(screen.getByText('Pro')).toBeInTheDocument();
            expect(screen.getByText('Free')).toBeInTheDocument();
        });

        test('displays model use cases', () => {
            expect(
                screen.getByText('Complex architectural decisions')
            ).toBeInTheDocument();
            expect(
                screen.getByText('Advanced problem solving')
            ).toBeInTheDocument();
            expect(screen.getByText('Basic documentation')).toBeInTheDocument();
        });
    });

    // Subscription section tests
    describe('Subscription Section', () => {
        beforeEach(() => {
            fireEvent.click(screen.getByText('Subscription Plans'));
        });

        test('renders all subscription tiers', () => {
            expect(screen.getByText('Copilot Enterprise')).toBeInTheDocument();
            expect(screen.getByText('Copilot Pro')).toBeInTheDocument();
            expect(screen.getByText('Copilot Free')).toBeInTheDocument();
        });

        test('displays subscription features', () => {
            expect(
                screen.getByText('Access to GPT-4 Turbo')
            ).toBeInTheDocument();
            expect(screen.getByText('Higher rate limits')).toBeInTheDocument();
            expect(
                screen.getByText('Basic code completion')
            ).toBeInTheDocument();
        });
    });

    // Tutorials section tests
    describe('Tutorials Section', () => {
        beforeEach(() => {
            fireEvent.click(screen.getByText('Video Tutorials'));
        });

        test('renders all tutorial cards', () => {
            const tutorials = [
                'Building this Website with Copilot',
                'Writing Unit Tests with Copilot',
                'Code Quality & Bug Fixing',
                'Project Documentation & Architecture',
            ];

            tutorials.forEach((title) => {
                expect(screen.getByText(title)).toBeInTheDocument();
            });
        });

        test('displays tutorial metadata', () => {
            expect(screen.getByText('15:30')).toBeInTheDocument();
            expect(screen.getByText('React')).toBeInTheDocument();
            expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
        });

        test('displays tutorial chapters', () => {
            expect(
                screen.getByText('Project Setup with Copilot')
            ).toBeInTheDocument();
            expect(
                screen.getByText('UI Component Creation')
            ).toBeInTheDocument();
        });

        test('renders Mermaid diagrams for documentation tutorial', () => {
            const mermaidCharts = screen.getAllByTestId('mermaid-chart');
            expect(mermaidCharts).toHaveLength(2);
        });

        test('displays play buttons for videos', () => {
            const playButtons = screen
                .getAllByRole('button')
                .filter((button) => button.querySelector('svg'));
            expect(playButtons.length).toBeGreaterThan(0);
        });
    });
});

// Snapshot test for the entire app
describe('App Snapshots', () => {
    test('matches snapshot', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });
});
