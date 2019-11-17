import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconAccount } from '../src';
import { IconAdd } from '../src';
import { IconAngleDown } from '../src';
import { IconAngleUp } from '../src';
import { IconArrowLeft } from '../src';
import { IconCaretDown } from '../src';
import { IconCart } from '../src';
import { IconChart } from '../src';
import { IconClose } from '../src';
import { IconDocument } from '../src';
import { IconExclamation } from '../src';
import { IconExpandLess } from '../src';
import { IconExpandMore } from '../src';
import { IconExport } from '../src';
import { IconEye } from '../src';
import { IconEyeNo } from '../src';
import { IconFacebook } from '../src';
import { IconFacebookCircle } from '../src';
import { IconFacebookSquare } from '../src';
import { IconFilm } from '../src';
import { IconGlobe } from '../src';
import { IconGoogle } from '../src';
import { IconHome } from '../src';
import { IconHouseThreeD } from '../src';
import { IconInstagram } from '../src';
import { IconLinkedin } from '../src';
import { IconMinus } from '../src';
import { IconMoney } from '../src';
import { IconMusic } from '../src';
import { IconMyLocation } from '../src';
import { IconPicture } from '../src';
import { IconPlus } from '../src';
import { IconRemove } from '../src';
import { IconRescale } from '../src';
import { IconShapes } from '../src';
import { IconSync } from '../src';
import { IconTrash } from '../src';
import { IconUser } from '../src';
import { IconWhatsapp } from '../src';
import { IconYoutube } from '../src';
import { IconZoomIn } from '../src';
import { IconZoomOut } from '../src';

const stories = storiesOf('React Icons', module);

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
};

const s: React.CSSProperties = {
  marginRight: 10,
};

const l: React.CSSProperties = {
  color: '#d11141',
};

stories.add('IconAccount', () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={rowStyle}><IconAccount style={l} /><span style={s} />IconAccount</div>
    <div style={rowStyle}><IconAdd style={l} /><span style={s} />IconAdd</div>
    <div style={rowStyle}><IconAngleDown style={l} /><span style={s} />IconAngleDown</div>
    <div style={rowStyle}><IconAngleUp style={l} /><span style={s} />IconAngleUp</div>
    <div style={rowStyle}><IconArrowLeft style={l} /><span style={s} />IconArrowLeft</div>
    <div style={rowStyle}><IconCaretDown style={l} /><span style={s} />IconCaretDown</div>
    <div style={rowStyle}><IconCart style={l} /><span style={s} />IconCart</div>
    <div style={rowStyle}><IconChart style={l} /><span style={s} />IconChart</div>
    <div style={rowStyle}><IconClose style={l} /><span style={s} />IconClose</div>
    <div style={rowStyle}><IconDocument style={l} /><span style={s} />IconDocument</div>
    <div style={rowStyle}><IconExclamation style={l} /><span style={s} />IconExclamation</div>
    <div style={rowStyle}><IconExpandLess style={l} /><span style={s} />IconExpandLess</div>
    <div style={rowStyle}><IconExpandMore style={l} /><span style={s} />IconExpandMore</div>
    <div style={rowStyle}><IconExport style={l} /><span style={s} />IconExport</div>
    <div style={rowStyle}><IconEye style={l} /><span style={s} />IconEye</div>
    <div style={rowStyle}><IconEyeNo style={l} /><span style={s} />IconEyeNo</div>
    <div style={rowStyle}><IconFacebook style={l} /><span style={s} />IconFacebook</div>
    <div style={rowStyle}><IconFacebookCircle style={l} /><span style={s} />IconFacebookCircle</div>
    <div style={rowStyle}><IconFacebookSquare style={l} /><span style={s} />IconFacebookSquare</div>
    <div style={rowStyle}><IconFilm style={l} /><span style={s} />IconFilm</div>
    <div style={rowStyle}><IconGlobe style={l} /><span style={s} />IconGlobe</div>
    <div style={rowStyle}><IconGoogle style={l} /><span style={s} />IconGoogle</div>
    <div style={rowStyle}><IconHome style={l} /><span style={s} />IconHome</div>
    <div style={rowStyle}><IconHouseThreeD style={l} /><span style={s} />IconHouseThreeD</div>
    <div style={rowStyle}><IconInstagram style={l} /><span style={s} />IconInstagram</div>
    <div style={rowStyle}><IconLinkedin style={l} /><span style={s} />IconLinkedin</div>
    <div style={rowStyle}><IconMinus style={l} /><span style={s} />IconMinus</div>
    <div style={rowStyle}><IconMoney style={l} /><span style={s} />IconMoney</div>
    <div style={rowStyle}><IconMusic style={l} /><span style={s} />IconMusic</div>
    <div style={rowStyle}><IconMyLocation style={l} /><span style={s} />IconMyLocation</div>
    <div style={rowStyle}><IconPicture style={l} /><span style={s} />IconPicture</div>
    <div style={rowStyle}><IconPlus style={l} /><span style={s} />IconPlus</div>
    <div style={rowStyle}><IconRemove style={l} /><span style={s} />IconRemove</div>
    <div style={rowStyle}><IconRescale style={l} /><span style={s} />IconRescale</div>
    <div style={rowStyle}><IconShapes style={l} /><span style={s} />IconShapes</div>
    <div style={rowStyle}><IconSync style={l} /><span style={s} />IconSync</div>
    <div style={rowStyle}><IconTrash style={l} /><span style={s} />IconTrash</div>
    <div style={rowStyle}><IconUser style={l} /><span style={s} />IconUser</div>
    <div style={rowStyle}><IconWhatsapp style={l} /><span style={s} />IconWhatsapp</div>
    <div style={rowStyle}><IconYoutube style={l} /><span style={s} />IconYoutube</div>
    <div style={rowStyle}><IconZoomIn style={l} /><span style={s} />IconZoomIn</div>
    <div style={rowStyle}><IconZoomOut style={l} /><span style={s} />IconZoomOut</div>
  </div>
));
