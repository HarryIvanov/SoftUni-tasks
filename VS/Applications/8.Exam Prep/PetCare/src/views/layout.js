import { html } from "../../node_modules/lit-html/lit-html.js";

// change with actual layout
export const layoutTemplate = (userData, content) => html`
<header>
    <nav>
      <section class="logo">
        <img src="./images/logo.png" alt="logo" />
      </section>
      <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>
        ${userData
          ? html`
              <li><a href="/create">Create Postcard</a></li>
              <li><a href="/logout">Logout</a></li>
            `
          : html`
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            `}

        <!--Only Users-->
      </ul>
    </nav>
</header>
  <main>${content}</main>`;
