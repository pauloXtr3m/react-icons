import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconAccount } from '../src';
import { IconAdd } from '../src';
import { IconAngleDown } from '../src';
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
import { IconFacebook } from '../src';
import { IconFilm } from '../src';
import { IconGlobe } from '../src';
import { IconHome } from '../src';
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

stories.add('IconAccount', () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={rowStyle}><IconAccount /><span style={s} />IconAccount</div>
    <div style={rowStyle}><IconAdd /><span style={s} />IconAdd</div>
    <div style={rowStyle}><IconAngleDown /><span style={s} />IconAngleDown</div>
    <div style={rowStyle}><IconArrowLeft /><span style={s} />IconArrowLeft</div>
    <div style={rowStyle}><IconCaretDown /><span style={s} />IconCaretDown</div>
    <div style={rowStyle}><IconCart /><span style={s} />IconCart</div>
    <div style={rowStyle}><IconChart /><span style={s} />IconChart</div>
    <div style={rowStyle}><IconClose /><span style={s} />IconClose</div>
    <div style={rowStyle}><IconDocument /><span style={s} />IconDocument</div>
    <div style={rowStyle}><IconExclamation /><span style={s} />IconExclamation</div>
    <div style={rowStyle}><IconExpandLess /><span style={s} />IconExpandLess</div>
    <div style={rowStyle}><IconExpandMore /><span style={s} />IconExpandMore</div>
    <div style={rowStyle}><IconExport /><span style={s} />IconExport</div>
    <div style={rowStyle}><IconFacebook /><span style={s} />IconFacebook</div>
    <div style={rowStyle}><IconFilm /><span style={s} />IconFilm</div>
    <div style={rowStyle}><IconGlobe /><span style={s} />IconGlobe</div>
    <div style={rowStyle}><IconHome /><span style={s} />IconHome</div>
    <div style={rowStyle}><IconInstagram /><span style={s} />IconInstagram</div>
    <div style={rowStyle}><IconLinkedin /><span style={s} />IconLinkedin</div>
    <div style={rowStyle}><IconMinus /><span style={s} />IconMinus</div>
    <div style={rowStyle}><IconMoney /><span style={s} />IconMoney</div>
    <div style={rowStyle}><IconMusic /><span style={s} />IconMusic</div>
    <div style={rowStyle}><IconMyLocation /><span style={s} />IconMyLocation</div>
    <div style={rowStyle}><IconPicture /><span style={s} />IconPicture</div>
    <div style={rowStyle}><IconPlus /><span style={s} />IconPlus</div>
    <div style={rowStyle}><IconRemove /><span style={s} />IconRemove</div>
    <div style={rowStyle}><IconRescale /><span style={s} />IconRescale</div>
    <div style={rowStyle}><IconShapes /><span style={s} />IconShapes</div>
    <div style={rowStyle}><IconSync /><span style={s} />IconSync</div>
    <div style={rowStyle}><IconTrash /><span style={s} />IconTrash</div>
    <div style={rowStyle}><IconUser /><span style={s} />IconUser</div>
    <div style={rowStyle}><IconWhatsapp /><span style={s} />IconWhatsapp</div>
    <div style={rowStyle}><IconYoutube /><span style={s} />IconYoutube</div>
    <div style={rowStyle}><IconZoomIn /><span style={s} />IconZoomIn</div>
    <div style={rowStyle}><IconZoomOut /><span style={s} />IconZoomOut</div>
  </div>
));
