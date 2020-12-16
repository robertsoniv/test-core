import { newSpecPage } from '@stencil/core/testing';
import { AnotherComponent } from '../another-component';

describe('another-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnotherComponent],
      html: `<another-component></another-component>`,
    });
    expect(page.root).toEqualHtml(`
      <another-component>
        <mock:shadow-root>
          <div>Another Component Example!</div>
        </mock:shadow-root>
      </another-component>
    `);
  });
});
