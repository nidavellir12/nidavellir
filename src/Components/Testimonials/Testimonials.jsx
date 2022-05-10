import React from "react"

export default function Testimonials() {
  return (
    <div class="testimonials">
      <h1>What Our Customers Say</h1>
      <div class="testimonialsContainer">
        <div class="customerReview">
          <blockquote>
            “Xometry has always given us exactly what we needed. We’ve received
            parts with holes in the right places, with the right finish, and on
            time. Their user-friendly website means faster turnaround.”
          </blockquote>
          <cite>Jackson Siu</cite> <br />
          <small>Lead Mechanical Engineer, Asylon</small>
        </div>
        <div class="customerReview">
          <blockquote>
            “Xometry delivers professionalism and ease. They take care of
            fulfillment so I don't need to juggle or manage suppliers. We buy
            the quote, and Xometry takes care of the rest.”
          </blockquote>
          <cite>Ryan Lambert</cite> <br />
          <small>Tooling Design Engineer, BMW</small>
        </div>
        <div class="customerReview">
          <blockquote>
            “I have been impressed with how forthcoming and responsive Xometry
            has been in all of our communications. Your prices have won you a
            lot of friends here at Thermaco.”
          </blockquote>
          <cite>Bruce Kyles</cite> <br />
          <small>Engineer, Thermaco</small>
        </div>
      </div>
    </div>
  )
}
