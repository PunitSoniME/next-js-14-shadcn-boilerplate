import { ProvidersTreeProvider } from '@/providers/ProvidersTreeProvider';
import { render as testingLibraryRender } from '@testing-library/react';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ProvidersTreeProvider>{children}</ProvidersTreeProvider>
    ),
  });
}
