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
            <h1>My name is !</h1>
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
            <h1>My name is Robert Watt!</h1>
            <table>
              <tbody>
                <tr>
                  <th>First Name</td>
                  <td>Robert</td>
                </tr>
                <tr>
                  <th>Last Name</td>
                  <td>Watt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
