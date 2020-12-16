import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            My name is !
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Robert" last="Watt"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Robert" last="Watt">
        <mock:shadow-root>
          <div>
            My name is Robert Watt!
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
