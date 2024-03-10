import '@testing-library/jest-dom';
import DarkMode from '@/components/dark-mode/DarkMode';
import { render, screen } from '@/test-utils';

describe('DarkMode', () => {

    it('should render dark mode button', () => {
        render(<DarkMode />);

        const darkModeButton = screen.getByTestId('dark-mode-test-id');

        expect(darkModeButton).toBeInTheDocument();
    });

});