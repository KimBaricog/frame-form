import "../style/saleoffer.css";

function saleoffer(props) {
  return (
    <>
      <article class="card">
        <section class="card__hero">
          <header class="card__hero-header">
            <span>20% OFF</span>
            <div class="card__icon">
              <svg
                height="20"
                width="20"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </header>

          <p class="card__job-title">{props.text}</p>
        </section>

        <footer class="card__footer">
          <div class="card__job-summary">
            <div class="card__job-icon">
              <img src={props.img} alt="icon" />
            </div>
            <div class="card__job"></div>
          </div>

          <a href="https://www.facebook.com/profile.php?id=61586541810285">
            <button class="card__btn">Buy now</button>
          </a>
        </footer>
      </article>
    </>
  );
}
export default saleoffer;
