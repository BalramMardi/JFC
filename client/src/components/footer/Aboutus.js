import React from "react";
import mission from "../../img/banner/mission.png";
import vision from "../../img/banner/vision.png";
import Layout from "../../layout/Layout";

const AboutUs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12 bg-slate-200 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div>
          <img src={vision} alt="vision" />
        </div>
        <div className="mt-4 mb-4">
          <img src={mission} alt="vision" />
        </div>

        <section className="mb-8">
          <p className="text-gray-700">
            Tata Steel successfully bid for the Jamshedpur franchise in 2017 to
            establish its own football club in the coveted Indian Super League
            (ISL). The steel giant, known for its pioneering role in the
            development of sports in India, secured Jamshedpur as the host city
            and participated in the ISL under the name Jamshedpur Football Club.
          </p>
          <p className="text-gray-700">
            The club plays its home matches at the iconic JRD Tata Sports
            Complex, fondly known as ‘The Furnace,’ which boasts the highest
            average attendance for ISL matches since the club's formation, with
            over 20,000 fans per game.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Performance and Growth
          </h2>
          <p className="text-gray-700">
            In its first two seasons, Jamshedpur FC finished 5th on the Hero ISL
            table, narrowly missing out on the semi-finals. The club also
            reached the quarterfinals of the Super Cup in April 2018. Despite
            finishing 8th in 2019 under Spanish head coach Antonio Iriondo, the
            club made significant changes ahead of the 2020-21 season by
            appointing English manager Owen Coyle.
          </p>
          <p className="text-gray-700">
            Under Coyle's guidance, who had previously managed English Premier
            League clubs like Burnley and Bolton Wanderers, as well as MLS Club
            Houston Dynamo, and Hero ISL club Chennaiyin FC, Jamshedpur FC saw a
            marked improvement, finishing 6th on the Hero ISL table. The club's
            hard work paid off in the 2021-22 season, where they won the league
            by finishing in first place with a record 43 points.
          </p>
          <p className="text-gray-700">
            Following this success, Jamshedpur FC appointed Aidy Boothroyd for
            the 2022-23 season, and Scott Cooper took charge in the 2023-24
            season, continuing the club’s legacy of excellence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Tata Steel’s Legacy in Sports
          </h2>
          <p className="text-gray-700">
            Tata Steel’s commitment to sports dates back to the vision of
            Jamsetji Nusserwanji Tata, who not only envisaged Asia's first fully
            integrated Steel Plant but also a model township in Jamshedpur. He
            advised his son, Sir Dorab Tata, to earmark "areas for Football,
            Hockey and Parks…".
          </p>
          <p className="text-gray-700">
            This commitment to sports preceded the building of the township,
            with J.R.D. Tata, under whose stewardship Tata Steel introduced
            world-class football to India through the famous Super Soccer
            series, bringing top clubs from Europe and South America to compete
            against India's best.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tata Football Academy</h2>
          <p className="text-gray-700">
            The Tata Football Academy (TFA) was established during J.R.D. Tata's
            tenure as Chairman of Tata Steel. His active support and personal
            passion for sports led to the academy's creation, which has since
            produced over 150 players who have represented the Indian national
            team. The academy continues to be a beacon of excellence in Indian
            football.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
          <p className="text-gray-700">
            Tata Steel’s commitment to grassroots sports development is further
            exemplified by its annual community football cup, where over 25,000
            locals participate. The formation of Jamshedpur FC has deepened this
            engagement, with the club running various grassroots and youth
            development programs across Jamshedpur and Jharkhand in
            collaboration with the Tata Steel Foundation.
          </p>
          <p className="text-gray-700">
            With multiple football schools and training centers engaging over
            3,000 kids, along with Football Festivals, Tournaments, and the
            development of over 200 trainers and coaches, Jamshedpur FC has made
            significant strides in Indian football in a short period. And the
            journey continues...
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
