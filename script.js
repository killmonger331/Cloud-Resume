// ----------------------------
// Portfolio Website Script
// Richard Morales
// ----------------------------

document.addEventListener("DOMContentLoaded", () => {

    // Visitor Counter Placeholder
    const visitorCount = document.getElementById("visitorCount");

    if (visitorCount) {
        visitorCount.textContent = "AWS Integration Pending";
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