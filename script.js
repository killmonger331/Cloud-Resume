// ----------------------------
// Portfolio Website Script
// Richard Morales
// ----------------------------

document.addEventListener("DOMContentLoaded", () => {

// Visitor Counter
const visitorCount = document.getElementById("visitorCount");

if (visitorCount) {

    fetch(
        "https://tj0uo69y77.execute-api.us-east-1.amazonaws.com/default/count"
    )
    .then(response => response.json())
    .then(data => {

        visitorCount.textContent = data.body;

    })
    .catch(error => {

        console.error(error);

        visitorCount.textContent = "Error";

    });
}

    // Fade-in Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });

    // Current Year in Footer
    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();

        footer.innerHTML =
            `© ${year} Richard Morales | Built with AWS, GitHub, and the Cloud Resume Challenge`;
    }

    // Console Message for Recruiters
    console.log(`
=================================================

Hello Recruiter / Hiring Manager!

This website is part of my Cloud Resume Challenge.

Current Technologies:
- HTML
- CSS
- JavaScript
- Git
- GitHub

Upcoming AWS Integrations:
- Amazon S3
- CloudFront
- API Gateway
- Lambda
- DynamoDB
- Terraform

Thank you for visiting.

Richard Morales

=================================================
`);
});