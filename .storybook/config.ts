import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

configure(requireContext('../stories', true, /\.stories\.tsx?$/), module);
