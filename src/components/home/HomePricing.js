import React from "react";
import SectionTitle from "../common/SectionTitle";

const HomePricing = () => {
  return (
    <section class="home-pricing-section p-tb-100">
      <div class="container">
        <SectionTitle
          title="Our Reasonable Pricing"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod labore et dolore magnam aliquam quaerat voluptatem."
        />

        <div class="home-pricing-content">
          <div class="home-pricing-category">
            <table>
              <thead>
                <tr class="orange-gradient">
                  <th class="t-align-left">Pricing list</th>
                  <th>Business main</th>
                  <th>Householder</th>
                  <th>Freelancer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Technical support over IRC
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Control payout timing
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Automate evidence submission
                  </td>
                  <td>
                    <span class="price-availability availability-blue">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-blue">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-blue">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Collaboration notes
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Transparent payouts
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-light">
                      <i class="bx bx-x"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    24×7 support
                  </td>
                  <td>
                    <span class="price-availability availability-green">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-green">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-green">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pricing-name blue-gradient">
                    <img src="assets/images/check-white.png" alt="check" />
                    Cognitive Management
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                  <td>
                    <span class="price-availability availability-orange-dark">
                      <i class="bx bx-check"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
