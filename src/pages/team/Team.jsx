import React from "react";
import "./team.css";
import BgImage from "../../components/bgImage/bgImage";
import team from "../../img/team.jpg";
import Worker from "../../components/worker/Worker";
import worker1 from "../../img/worker-1.jpg";
import worker2 from "../../img/worker-2.jpg";
import worker3 from "../../img/worker-3.jpg";
import worker4 from "../../img/worker-4.jpg";
import worker5 from "../../img/worker-5.jpg";
import worker6 from "../../img/worker-6.jpg";
import worker7 from "../../img/worker-7.jpg";
import worker8 from "../../img/worker-8.jpg";
function Team() {
  return (
    <>
      <BgImage img={team} title="Our Professional" text="Team" link="team" />
      <div className="container">
        <div className="employe__list">
          <div className="employe__item">
            <div className="employe__item-1">
              <Worker imageUrl={worker1} title="Charlotte Levi" />
            </div>
            <div className="employe__item-2">
              <Worker imageUrl={worker2} title="Nattasha Julie" />
            </div>
            <div className="employe__item-3">
              <Worker imageUrl={worker4} title="John Smith" />
            </div>
            <div className="employe__item-3">
              <Worker imageUrl={worker3} title="Nora Owen" />
            </div>
          </div>
          <div className="employe__item">
            <div className="employe__item-1">
              <Worker imageUrl={worker5} title="Sofia Carter" />
            </div>
            <div className="employe__item-2">
              <Worker imageUrl={worker6} title="Avery Jackson" />
            </div>
            <div className="employe__item-3">
              <Worker imageUrl={worker7} title="Luna James" />
            </div>
            <div className="employe__item-3">
              <Worker imageUrl={worker8} title="Gianna Mateo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
