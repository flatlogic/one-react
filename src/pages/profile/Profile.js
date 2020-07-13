import React from "react";
import cx from "classnames";
import { Row, Col, Input, Label, Form, FormGroup } from "reactstrap";
import Widget from "../../components/Widget";

import p23 from "../../images/pictures/23.png";
import a6 from "../../images/people/a5.jpg";
import a1 from "../../images/people/a1.jpg";
import a3 from "../../images/people/a3.jpg";
import tn6 from "../../images/people/tn6.png";
import tn7 from "../../images/people/tn7.png";
import smilesIcon from '../../images/icons/happy.svg'
import photoIcon from '../../images/icons/camera.svg'
import locationIcon from '../../images/icons/placeholder.svg'
import facebookIcon from '../../images/icons/facebook.png'
import githubIcon from "../../images/icons/github.png";
import googleIcon from '../../images/icons/gplus.png'
import linkedinIcon from '../../images/icons/linkedin.png'
import twitterIcon from '../../images/icons/twitter.png'


import s from "./Profile.module.scss";

const Profile = () => (
  <div className={s.root}>
    <Row>
      <Col lg={6} xs={12}>
        <Widget>
          <div className="widget-top-overflow text-white">
            <div className="height-250 overflow-hidden">
              <img className="img-fluid" src={p23} alt="..." />
            </div>
            <button className="btn border-0 btn-sm mb-2">
              <img src={facebookIcon} alt="facebook"/>
            </button>
            <button className="btn border-0 btn-sm mb-2" style={{marginRight: 65}}>
              <img src={githubIcon} alt="github"/>
            </button>
            <button className="btn border-0 btn-sm mb-2" style={{marginRight: 100}}>
              <img src={googleIcon} alt="google"/>
            </button>
            <button className="btn border-0 btn-sm mb-2" style={{marginRight: 135}}>
              <img src={linkedinIcon} alt="linkedin"/>
            </button>
            <button className="btn border-0 btn-sm mb-2" style={{marginRight: 170}}>
              <img src={twitterIcon} alt="twitter"/>
            </button>
          </div>
          <Row>
            <Col md={5} xs={12} className="text-center">
              <div className={s.profileContactContainer}>
                <span className="thumb-xl mb-3">
                  <img
                    className={[s.profileAvatar, "rounded-circle"].join(" ")}
                    src={tn6}
                    alt="..."
                  />
                </span>
                <h5 className="fw-normal">
                  Adam <span className="fw-semi-bold">Johns</span>
                </h5>
                <p>UI/UX designer</p>
                <div>
                  <ul className={cx(s.profileContacts, "mt-sm")}>
                    <li>
                      <i className="fa fa-lg fa-phone fa-fw mr-2" />
                      <button className="btn-link" style={{ fontSize: 14 }}>
                        {" "}
                        +375 29 555-55-55
                      </button>
                    </li>
                    <li>
                      <i className="fa fa-lg fa-envelope-o fa-fw mr-2" />
                      <button className="btn-link" style={{ fontSize: 14 }}>
                        {" "}
                        Admin@admin.com
                      </button>
                    </li>
                    <li>
                      <i className="fa fa-lg fa-map-marker fa-fw mr-2" />
                      <button className="btn-link" style={{ fontSize: 14 }}>
                        {" "}
                        Minsk, Belarus
                      </button>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-success btn-sm mb-3 text-uppercase">
                  <i className="fa fa-envelope-o mr-2" />
                  Send message
                </button>
              </div>
            </Col>
            <Col md={7} xs={12}>
              <div className="stats-row mt-3">
                <div className={[s.profileStat, "stat-item"].join(" ")}>
                  <p
                    className={[s.profileStatValue, "value text-right"].join(
                      " "
                    )}
                  >
                    251
                  </p>
                  <h6 className="name">Posts</h6>
                </div>
                <div className={[s.profileStat, "stat-item"].join(" ")}>
                  <p
                    className={[s.profileStatValue, "value text-right"].join(
                      " "
                    )}
                  >
                    9.38%
                  </p>
                  <h6 className="name">Conversion</h6>
                </div>
                <div className={[s.profileStat, "stat-item"].join(" ")}>
                  <p
                    className={[s.profileStatValue, "value text-right"].join(
                      " "
                    )}
                  >
                    842
                  </p>
                  <h6 className="name">Followers</h6>
                </div>
              </div>
              <p>
                <span className="badge badge-default rounded-0"> UI/UX </span>
                <span className="badge badge-default rounded-0 ml-2">
                  {" "}
                  Web Design{" "}
                </span>
                <span className="badge badge-default rounded-0 ml-2">
                  {" "}
                  Mobile Apps{" "}
                </span>
              </p>
              <p className="lead mt-xlg">
                My name is Adam Johns and here is my new Sing user profile page.
              </p>
              <p className="text-muted">
                I love reading people&apos;s summaries page especially those who
                are in the same industry as me. Sometimes it&apos;s much easier
                to find your concentration during the night.
              </p>
            </Col>
          </Row>
        </Widget>
        <Widget>
          <Form className="mt mb-4" action="#">
            <FormGroup className="mb-2">
              <Label className="sr-only" for="new-event">
                New event
              </Label>
              <div className={"d-flex"}>
                <span className="thumb-xs avatar pull-left mr-sm">
                  <img className="rounded-circle" src={tn6} alt="..." />
                </span>
                <Input
                  type="textarea"
                  id="new-event"
                  placeholder="Post something..."
                  rows="3"
                />
              </div>
            </FormGroup>
            <div className="btn-toolbar ml-3">
              <div className="btn-group">
                <button className="btn btn-sm btn-default bg-transparent border-0">
                  <img src={smilesIcon} alt="smiles"/>
                </button>
                <button className="btn btn-sm btn-default bg-transparent border-0">
                  <img src={photoIcon} alt="photo"/>
                </button>
                <button className="btn btn-sm btn-default bg-transparent border-0">
                  <img src={locationIcon} alt="location"/>
                </button>
              </div>
              <button type="submit" className="btn btn-success btn-sm ml-auto">
                Post
              </button>
            </div>
          </Form>
        </Widget>
      </Col>
      <Col lg={6} xs={12}>
        <section className="activities">
          <h3 className={"mb-4"}>Activities</h3>
          <section className={s.event}>
            <header>
              <span className={s.eventAvatar}>
                <img className="rounded-circle" src={a6} alt="..." />
              </span>
              <h5 className={s.eventTitle}>
                <button className="btn-link">Bob Nilson</button>{" "}
                <small>
                  <button className="btn-link">@nils</button>
                </small>
              </h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>

            <div className={s.eventBody}>
              There is no such thing as maturity. There is instead an
              ever-evolving process of maturing. Because when there is a
              maturity, there is ...
            </div>
            <footer className={s.eventFooter}>
              <ul className="post-links" style={{ margin: ".5em 0" }}>
                <li>
                  <button className="btn-link">1 hour</button>
                </li>
                <li>
                  <button className="btn-link">
                    <span className="text-danger">
                      <i className="fa fa-heart" /> Like
                    </span>
                  </button>
                </li>
                <li>
                  <button className="btn-link">Comment</button>
                </li>
              </ul>
            </footer>
          </section>
          <section className={s.event}>
            <header>
              <span className={s.eventAvatar}>
                <img className="rounded-circle" src={tn7} alt="..." />
              </span>
              <h5 className={s.eventTitle}>
                <button className="btn-link">Jessica Smith</button>{" "}
                <small>@jess</small>
              </h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>
            <div className={s.eventBody}>
              Check out this awesome photo I made in Italy last summer. Seems it
              was lost somewhere deep inside my brand new HDD 40TB. Thanks god I
              found it!
            </div>
            <footer className={s.eventFooter}>
              <div className="clearfix">
                <ul
                  className="post-links mt-sm pull-left"
                  style={{ margin: ".5em 0" }}
                >
                  <li>
                    <button className="btn-link">1 hour</button>
                  </li>
                  <li>
                    <button className="btn-link">
                      <span className="text-danger">
                        <i className="fa fa-heart-o" /> Like
                      </span>
                    </button>
                  </li>
                  <li>
                    <button className="btn-link">Comment</button>
                  </li>
                </ul>

                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link">
                    <img className="rounded-circle" alt="..." src={a1} />
                  </button>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link">
                    <img className="rounded-circle" alt="..." src={a6} />
                  </button>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link">
                    <img className="rounded-circle" alt="..." src={a3} />
                  </button>
                </span>
              </div>
              <ul className="post-comments mt-sm">
                <li className={"pl-0"}>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={a1} alt="..." />
                  </span>
                  <div className="comment-body">
                    <h6 className="author fs-sm fw-semi-bold">
                      Ignacio Abad <small>6 mins ago</small>
                    </h6>
                    <p>Hey, have you heard anything about that?</p>
                  </div>
                </li>
                <li className={"pl-0"}>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={tn6} alt="..." />
                  </span>
                  <div className="comment-body">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Write your comment..."
                    />
                  </div>
                </li>
              </ul>
            </footer>
          </section>
        </section>
      </Col>
    </Row>
  </div>
);

export default Profile;
