import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../../util.js";
import { post } from "../data/api.js";

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add Product</h2>
      <form @submit=${onCreate} class="create-form">
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <input
          type="text"
          name="imageUrl"
          id="product-image"
          placeholder="Product Image"
        />
        <input
          type="text"
          name="category"
          id="product-category"
          placeholder="Category"
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input
          type="text"
          name="price"
          id="product-price"
          placeholder="Price"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;
export async function createProduct(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate({name, imageUrl, category, description, price}, form) {
    if (name == "" || imageUrl == "" || category == "" || description == "" || price == "") {
        return alert('All fields are required')
    }
    const product = {
        name,
        imageUrl,
        category,
        description,
        price
    }
    await post('/data/products', product);
    form.reset();
    ctx.page.redirect('/catalog');
  }
}
