import React from 'react';
import {
  Button,
  ButtonGroup,
    Row,
    Col
} from 'reactstrap';
import Widget from '../../../components/Widget'

import Lightbox from 'react-images';
import s from './Gallery.module.scss';

import pic1 from '../../../images/pictures/24.png';
import pic2 from '../../../images/pictures/25.png';
import pic3 from '../../../images/pictures/26.png';
import pic4 from '../../../images/pictures/27.png';
import pic5 from '../../../images/pictures/28.png';
import pic6 from '../../../images/pictures/29.png';
import pic8 from '../../../images/pictures/30.png';
import pic9 from '../../../images/pictures/31.png';
import pic10 from '../../../images/pictures/32.png';
import pic11 from '../../../images/pictures/33.png';
import pic13 from '../../../images/pictures/34.png';
import pic14 from '../../../images/pictures/35.png';

const items = [
  {
    name: 'Mountains',
    groups: [
      'nature',
    ],
    src: pic1,
    date: '10 mins',
  },
  {
    name: 'Empire State Pigeon',
    groups: [
      'people',
    ],
    src: pic2,
    date: '1 hour',
    like: true,
  },
  {
    name: 'Big Lake',
    groups: [
      'nature',
    ],
    src: pic3,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Forest',
    groups: [
      'nature',
    ],
    src: pic4,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Smile',
    groups: [
      'people',
    ],
    src: pic5,
    date: '2 mins',
  },
  {
    name: 'Smile',
    groups: [
      'people',
    ],
    src: pic6,
    date: '1 hour',
    like: true,
  },
  {
    name: 'Fog',
    groups: [
      'nature',
    ],
    src: pic8,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Beach',
    groups: [
      'people',
    ],
    src: pic9,
    date: '2 mins',
  },
  {
    name: 'Pause',
    groups: [
      'people',
    ],
    src: pic10,
    date: '3 hour',
    like: true,
  },
  {
    name: 'Space',
    groups: [
      'space',
    ],
    src: pic11,
    date: '3 hour',
    like: true,
  },
  {
    name: 'Shuttle',
    groups: [
      'space',
    ],
    src: pic13,
    date: '35 mins',
    like: true,
  },
  {
    name: 'Sky',
    groups: [
      'space',
    ],
    src: pic14,
    date: '2 mins',
  },
];

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      children: items,
      activeGroup: 'all',
      order: 'asc',
      theme: {
        arrow: {
          ':focus': {
            outline: 0,
          },
        },
        close: {
          ':focus': {
            outline: 0,
          },
        },
      },
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.state.children.length - 1) return;

    this.gotoNext();
  }

  filterChildren(type) {
    this.setState({
      children: type === 'all' ? items : items.filter((child) => {
        const group = child.groups.find(item => item === type);
        return !!group;
      }),
      activeGroup: type,
    });
  }

  orderChildren(order) {
    const children = this.state.children.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return order === 'asc' ? -1 : 1;
      }

      if (nameA > nameB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    this.setState({ children, order });
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col sm={12}>
            <Widget>
              <ButtonGroup id="shuffle-buttons" className={s.galleryBtnGroup}>
                <Button color="default" onClick={() => this.filterChildren('all')} active={this.state.activeGroup === 'all'}>All</Button>
                <Button color="default" onClick={() => this.filterChildren('nature')} active={this.state.activeGroup === 'nature'}>Nature</Button>
                <Button color="default" onClick={() => this.filterChildren('people')} active={this.state.activeGroup === 'people'}>People</Button>
                <Button color="default" onClick={() => this.filterChildren('space')} active={this.state.activeGroup === 'space'}>Space</Button>
              </ButtonGroup>
            </Widget>
          </Col>
        </Row>
        <div className={s.gallery}>
          {this.state.children.map((item, index) => {
            const key = item.name + index;
            return (
              <div key={key} className={`${s.picture} card`}>
                <a href={item.src} onClick={e => this.openLightbox(index, e)}><img className="figure-img" src={item.src} alt="..." /></a>
                <div className={s.description}>
                  <small className="mt-0 mb-sm">{item.name}</small>
                  <hr className={"mt-1"}/>
                   <ul className="post-links">
                    <li><a href="/#">{item.date}</a></li>
                    <li><button className="btn-link"><span className="text-danger"><i className={`fa ${item.like ? 'fa-heart' : 'fa-heart-o'}`} /> Like</span></button></li>
                    <li><a href="/#">Details</a></li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.children}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickImage={this.handleClickImage}
          onClickThumbnail={this.gotoImage}
          backdropClosesModal
          enableKeyboardInput
          theme={this.state.theme}
        />
      </div>);
  }

}

export default Gallery;
