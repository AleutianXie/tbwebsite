/**
 *  Created by pw on 2020/11/8 11:45 上午.
 */
import React, { Component } from 'react';
import { TeambuildingSubtitle } from './DetailContent';
import './Feature.less';

interface Props {
  feature: API.Feature;
  places?: API.Place[];
}

export default function(props: Props) {
  const { feature, places } = props;
  return (
    <div className="teambuilding-feature">
      <TeambuildingSubtitle title={'团建特色'} />
      <div className="theme">
        <img className="img" src={feature.picture} alt={'团建特色图片'} />
        <div className="theme-desc">{feature.desc}</div>
      </div>
      {places?.map((place, index) => {
        return (
          <div key={index} className="place">
            <div className="title">团建场地</div>
            <div className="img-wrapper">
              {place.pictures.map(picture => {
                return (
                  <img
                    className="img"
                    src={`${picture}?x-oss-process=style/activity_place`}
                  />
                );
              })}
            </div>
            <div className="place-dec">
              <div className="sub-title">{place.foreword}</div>
              <div className="dec">{place.later}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
