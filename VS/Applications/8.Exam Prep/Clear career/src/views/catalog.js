import { html } from "../../node_modules/lit-html/lit-html.js";
import {get} from '../data/api.js'

const catalogTemplate = (data) => html `
    <section id="dashboard">
          <h2>Job Offers</h2>

          <!-- Display a div with information about every post (if any)-->
          ${data.length > 0 ? html `
          ${data.map(offer => html `
          <div class="offer">
            <img src="${offer.imageUrl}" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>
          `)}
          ` : html`<h2>No offers yet.</h2>`}
        </section>
`

export async function catalogView (ctx) {
    const data = await get('/data/offers?sortBy=_createdOn%20desc')
        ctx.render(catalogTemplate(data));
}