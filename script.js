// Newsletter
    const newsletterForm =
      document.querySelector(".newsletter-form");

    newsletterForm.addEventListener("submit", function(event) {

      event.preventDefault();

      const button =
        newsletterForm.querySelector("button");

      button.textContent = "¡Gracias!";

      button.style.background = "#8d2929";

    });


    // Animación sencilla al aparecer elementos

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";

            }

          });

        },
        {
          threshold: 0.1
        }
      );


    document
      .querySelectorAll(
        ".article-card, .service, .side-story, .ranking"
      )
      .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
          "opacity .6s ease, transform .6s ease";

        observer.observe(element);

      });
