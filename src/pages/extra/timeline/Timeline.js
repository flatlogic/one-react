import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";

import s from "./Timeline.module.scss";

// import a1 from '../../../images/people/a1.jpg';
// import a3 from '../../../images/people/a3.jpg';
// import a4 from '../../../images/people/a4.jpg';
// import a5 from '../../../images/people/a5.jpg';
// import avatar from '../../../images/avatar.png';
// import a6 from "../../../images/people/a6.jpg";
// import a2 from "../../../images/people/a2.jpg";
import tn6 from "../../../images/people/tn6.png";
// import p1 from "../../../images/people/p1.png";
// import p2 from "../../../images/people/p2.png";


//import img8 from '../../../images/search/8.jpg';
// import Widget from "../../../components/Widget";
// import i1 from "../../../images/search/1.jpg";
// import i2 from "../../../images/search/5.jpg";
// import i3 from "../../../images/search/3.jpg";
// import i4 from "../../../images/search/13.jpg";
import cardsData from "./mock";

const BasicMap = withScriptjs(
    withGoogleMap(() => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 51, lng: 7}}
            defaultOptions={{
                mapTypeControl: false,
                fullscreenControl: false,
                gestureHandling: "greedy",
            }}
        >
            <Marker position={{lat: 51, lng: 7}} draggable/>
        </GoogleMap>
    ))
);


const WriteComment = () => {
    return (
        <ul className={s.postComments}>
            <li>
        <span className={`thumb-sm float-left mr-md`}>
          <img className="rounded-circle" src={tn6} alt="..."/>
        </span>
                <div className={s.commentBody}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Write your comment..."
                    />
                </div>
            </li>
        </ul>
    );
};

const MapBox = () => {
    return (
        <div className={s.eventMap}>
            <BasicMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                loadingElement={<div style={{height: "200px", width: "100%"}}/>}
                containerElement={<div style={{height: "200px"}}/>}
                mapElement={<div style={{height: "200px"}}/>}
            />
        </div>
    );
};

const ImageBox = (props) => {
    return (
        <div className={s.eventImage}>
            <a href="../../../images/pictures/26.png">
                <img src={props.img.img} alt="..."/>
            </a>
        </div>
    );
};


// const UserComments = () => {
//     return (
//         <ul className={s.postComments}>
//             {this.postComments.map((comment) =>
//                 <li>
//                     <span className={`thumb-sm float-left mr-md`}>
//                         <img className="rounded-circle" src={comment.commentImg} alt="..."/>
//                     </span>
//                     <div className={s.commentBody}>
//                         <h6 className={`${s.author} fw-semi-bold`}>{comment.nameUser} <small>{comment.timeLast}</small></h6>
//                         <p>{comment.post}</p>
//                     </div>
//                 </li>
//             )}
//                 <li>
//                     <span className={`thumb-sm float-left mr-md`}>
//                         <img className="rounded-circle" src={tn6} alt="..."/>
//                     </span>
//                     <div className={s.commentBody}>
//                         <input className="form-control" type="text" placeholder="Write your comment..."/>
//                     </div>
//                 </li>
//          </ul>
//     )
// }


class Timeline extends React.Component {
    state = {
        cd: cardsData
    };

    render() {

        return (
            <div>
                <ul className={s.timeline}>
                    {this.state.cd.cardsData.map((Data) => (
                        <li className={Data.inverted ? `${s.timelineInverted}` : null}>
                            {Data.badgeImg ?
                                <div className={`${s.timelineBadge} ${s.badgeImg}`}>
                                    <a href="/#">
                                        <i className={`${s.fa} fa fa-circle invert`}>
                                            <img
                                                className={`rounded-circle`}
                                                src={Data.imgUser}
                                                style={{left: "1px", top: "4px"}}
                                                alt=""
                                            />
                                        </i>
                                    </a>
                                </div> :
                                <div className={s.timelineBadge}>
                                    <a href='/#'>
                                        <i className={`${s.fa} fa fa-circle`}>
                                            <img src={Data.imgIcon} alt=""/>
                                        </i>
                                    </a>
                                </div>
                            }

                            <div className={s.timelinePanel}>
                                <div>
                                    <section className={s.event}>
                    <span className={`thumb float-left mr-md`}>
                      <img
                          className="rounded-circle"
                          src={Data.imgUser}
                          alt="avatar"
                      />
                    </span>
                                        <h5 className={s.eventHeading}>
                                            {Data.userName} <a href="/#">{Data.userNick}</a>
                                        </h5>
                                        <p className={`text-muted fs-sm`}>{Data.timeZone}</p>
                                        {Data.PostBody ? Data.PostBody.map((post) => (
                                                <div>
                                                    <h5>
                                                        {post.header ? post.header : null}
                                                    </h5>
                                                    <p> {post.textPost ? post.textPost : null} </p>
                                                </div>
                                            ))
                                            : ""}
                                        {Data.HasMap ? <MapBox/> : null}
                                        {Data.hasMedia ? <ImageBox img={Data.media.image}/> : null}
                                        <footer className={s.timelineFooter}>
                                            <ul className={s.postLinks}>
                                                <li>
                                                    <a href="/#">{Data.lastPublish} </a>
                                                </li>
                                                <li>
                                                    <a href="/#">
                            <span className="text-danger">
                                <i className={`fa fa-heart${Data.liked ? '' : '-o'}`}/> Like
                            </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#">Comment</a>
                                                </li>
                                            </ul>
                                            {Data.postComments
                                                ? Data.postComments.map((comment) => (
                                                    <ul className={s.postComments}>
                                                        <li>
                                <span className={`thumb-sm float-left mr-md`}>
                                  <img
                                      className="rounded-circle"
                                      src={comment.commentImg}
                                      alt="..."
                                  />
                                </span>
                                                            <div className={s.commentBody}>
                                                                <h6 className={`${s.author} fw-semi-bold`}>
                                                                    {comment.nameUser}{" "}
                                                                    <small>{comment.timeLast}</small>
                                                                </h6>
                                                                <p>{comment.post}</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ))
                                                : ""}
                                            {Data.commentWrite ? <WriteComment/> : null}
                                        </footer>
                                    </section>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="clearfix mb-0" style={{float: "none"}}/>
                </ul>


                {/*  <li className={s.timelineInverted}>*/}
                {/*    <div className={s.timelineBadge}>*/}
                {/*      <a><i className={`${s.fa} fa fa-circle invert`}><img src={location} alt=""/></i></a>*/}
                {/*    </div>*/}
                {/*    <div className={s.timelinePanel}>*/}
                {/*      <div>*/}
                {/*          <section className={s.event}>*/}
                {/*            <span className={`thumb float-left mr-md`}>*/}
                {/*              <img className="rounded-circle" src={cd.user.imgUser} alt="..."/>*/}
                {/*            </span>*/}
                {/*            <h5 className={s.eventHeading}>{cd.user.userName}  <a href="#">{cd.user.userNick}</a></h5>*/}
                {/*            <p className={`text-muted fs-sm`}>{cd.user.timeZone}</p>*/}

                {/*            <div className={s.eventMap}>*/}
                {/*            <BasicMap*/}
                {/*              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"*/}
                {/*              loadingElement={<div style={{ height: '200px', width: '100%' }} />}*/}
                {/*              containerElement={<div style={{ height: '200px' }} />}*/}
                {/*              mapElement={<div style={{ height: '200px' }} />}/>*/}
                {/*            </div>*/}
                {/*            <footer>*/}
                {/*              <Links/>*/}
                {/*              <ul className={s.postComments}>*/}
                {/*                {this.postComments.map((comment) =>*/}
                {/*                    <li>*/}
                {/*                        <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                          <img className="rounded-circle" src={comment.commentImg} alt="..."/>*/}
                {/*                        </span>*/}
                {/*                      <div className={s.commentBody}>*/}
                {/*                        <h6 className={`${s.author} fw-semi-bold`}>{comment.nameUser} <small>{comment.timeLast}</small></h6>*/}
                {/*                        <p>{comment.post}</p>*/}
                {/*                      </div>*/}
                {/*                    </li>*/}
                {/*                )}*/}
                {/*                <li>*/}
                {/*                    <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                      <img className="rounded-circle" src={tn6} alt="..."/>*/}
                {/*                    </span>*/}
                {/*                  <div className={s.commentBody}>*/}
                {/*                    <input className="form-control" type="text" placeholder="Write your comment..."/>*/}
                {/*                  </div>*/}
                {/*                </li>*/}
                {/*              </ul>*/}
                {/*            </footer>*/}
                {/*          </section>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <div className={s.timelineBadge}>*/}
                {/*      <a><i className={`${s.fa} fa fa-circle invert`}><img src={call} alt=""/></i></a></div>*/}
                {/*    <div className={s.timelinePanel}>*/}
                {/*      <div>*/}
                {/*        <section className={s.event}>*/}
                {/*          <span  className={`thumb float-left mr-md`}>*/}
                {/*            <img className="rounded-circle" src={cd.user1.imgUser} alt="..."/>*/}
                {/*          </span>*/}
                {/*          <h5 className={s.eventHeading}>{cd.user1.userName} <a href="#">{cd.user1.userNick}</a></h5>*/}
                {/*          <p className={`text-muted fs-sm`}>{cd.user1.timeZone}</p>*/}
                {/*          <p className="fs-mini">*/}
                {/*            {cd.user1.status}*/}
                {/*          </p>*/}
                {/*          <div className={s.eventImage}>*/}
                {/*            <a href="../../../images/pictures/26.png"><img src={cd.user1.imageStatus} alt="..."/></a>*/}
                {/*          </div>*/}
                {/*          <footer>*/}
                {/*            <div className="clearfix">*/}
                {/*              <Links2/>*/}
                {/*            </div>*/}
                {/*          </footer>*/}
                {/*        </section>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}

                {/*  <li className={s.timelineInverted}>*/}
                {/*    <div className={s.timelineBadge}>*/}
                {/*      <a><i className={`${s.fa} fa fa-circle invert`}><img src={email} alt=""/></i></a>*/}
                {/*    </div>*/}
                {/*    <div className={s.timelinePanel}>*/}
                {/*      <div className={s.widget}>*/}
                {/*          <section className={s.event}>*/}
                {/*            <span className={`thumb float-left mr-md`}>*/}
                {/*              <img className="rounded-circle" src={cd.user2.imgUser} alt="..."/>*/}
                {/*            </span>*/}
                {/*            <h5 className={s.eventHeading}>{cd.user2.userName} <a href="#">{cd.user2.userNick}</a></h5>*/}
                {/*            <p className="text-muted fs-sm">{cd.user2.timeZone}</p>*/}
                {/*            <p>{cd.user2.status}</p>*/}
                {/*            <footer>*/}
                {/*              <Links/>*/}
                {/*              <ul className={s.postComments}>*/}
                {/*                {this.postComments.map((comment) =>*/}
                {/*                    <li>*/}
                {/*                        <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                          <img className="rounded-circle" src={comment.commentImg} alt="..."/>*/}
                {/*                        </span>*/}
                {/*                      <div className={s.commentBody}>*/}
                {/*                        <h6 className={`${s.author} fw-semi-bold`}>{comment.nameUser} <small>{comment.timeLast}</small></h6>*/}
                {/*                        <p>{comment.post}</p>*/}
                {/*                      </div>*/}
                {/*                    </li>*/}
                {/*                )}*/}
                {/*                <li>*/}
                {/*                    <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                      <img className="rounded-circle" src={tn6} alt="..."/>*/}
                {/*                    </span>*/}
                {/*                  <div className={s.commentBody}>*/}
                {/*                    <input className="form-control" type="text" placeholder="Write your comment..."/>*/}
                {/*                  </div>*/}
                {/*                </li>*/}
                {/*              </ul>*/}
                {/*            </footer>*/}
                {/*          </section>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <div className={s.timelineBadge}>*/}
                {/*      <a><i className={`${s.fa} fa fa-circle invert`}><img src={call} alt=""/></i></a></div>*/}
                {/*    <div className={s.timelinePanel}>*/}
                {/*      <div className={s.widget}>*/}
                {/*          <section className={s.event}>*/}
                {/*            <span className={`thumb float-left mr-md`}>*/}
                {/*              <img className="rounded-circle" src={cd.user2.imgUser} alt="..."/>*/}
                {/*            </span>*/}
                {/*            <h5 className={s.eventHeading}>{cd.user2.userName} <a href="#">{cd.user2.userNick}</a></h5>*/}
                {/*            <p className={`text-muted fs-sm`}>{cd.user2.timeZone}</p>*/}
                {/*            <p>{cd.user2.status}</p>*/}
                {/*            <footer>*/}
                {/*              <Links/>*/}
                {/*              <ul className={s.postComments}>*/}
                {/*                {this.postComments.map((comment) =>*/}
                {/*                    <li>*/}
                {/*                        <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                          <img className="rounded-circle" src={comment.commentImg} alt="..."/>*/}
                {/*                        </span>*/}
                {/*                      <div className={s.commentBody}>*/}
                {/*                        <h6 className={`${s.author} fw-semi-bold`}>{comment.nameUser} <small>{comment.timeLast}</small></h6>*/}
                {/*                        <p>{comment.post}</p>*/}
                {/*                      </div>*/}
                {/*                    </li>*/}
                {/*                )}*/}
                {/*                <li>*/}
                {/*                    <span className={`thumb-sm float-left mr-md`}>*/}
                {/*                      <img className="rounded-circle" src={tn6} alt="..."/>*/}
                {/*                    </span>*/}
                {/*                  <div className={s.commentBody}>*/}
                {/*                    <input className="form-control" type="text" placeholder="Write your comment..."/>*/}
                {/*                  </div>*/}
                {/*                </li>*/}
                {/*              </ul>*/}
                {/*            </footer>*/}
                {/*          </section>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}

                {/*  <li className={s.timelineInverted}>*/}
                {/*    <div className={`${s.timelineBadge} ${s.badgeImg}`}>*/}
                {/*      <a>*/}
                {/*        <i className={`${s.fa} fa fa-circle invert`}>*/}
                {/*          <img className={`rounded-circle`} src={cd.user3.imgUser} style={{ left: "1px", top: "4px"}} alt=""/>*/}
                {/*        </i>*/}
                {/*      </a>*/}
                {/*    </div>*/}
                {/*    <div className={s.timelinePanel}>*/}
                {/*      <div className={s.widget}>*/}
                {/*        <section className={s.event}>*/}
                {/*          <span className={`thumb float-left mr-md`}>*/}
                {/*            <img className={`rounded-circle`} src={cd.user3.imgUser} alt="..."/>*/}
                {/*          </span>*/}
                {/*          <h5 className={s.eventHeading}> {cd.user3.userName} <a href="#">{cd.user3.userNick}</a></h5>*/}
                {/*          <p className="text-muted fs-sm">{cd.user3.timeZone}</p>*/}
                {/*          <h5>New <span className="fw-semi-bold"> Project </span> Launch</h5>*/}
                {/*          <p className="">*/}
                {/*            {cd.user3.status}*/}
                {/*          </p>*/}
                {/*          <footer>*/}
                {/*            <Links2/>*/}
                {/*          </footer>*/}
                {/*        </section>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}

                {/*  <li className="clearfix mb-0" style={{float: "none"}}></li>*/}
                {/*</ul>*/}
            </div>
        );
    }
}

export default Timeline;
