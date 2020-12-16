import { newE2EPage } from '@stencil/core/testing';

describe('another-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<another-component></another-component>');

    const element = await page.find('another-component');
    expect(element).toHaveClass('hydrated');
  });
});
