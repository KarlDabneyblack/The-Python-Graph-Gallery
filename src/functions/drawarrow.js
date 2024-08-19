import React from 'react';

const name = 'fig_arrow';
const description = (
  <>
    <p>
      The <code>fig_arrow()</code> function of drawarrow add an arrow on a given
      matplotlib figure. You can customize any of its properties such as its
      color, head/tail width, opacity...
    </p>
  </>
);

const docUrl = 'https://github.com/JosephBARBIERDARNAL/drawarrow';

//
//
//
//
//
const param1 = {
  name: 'tail_position',
  description: (
    <p>
      Array-like of length 2 specifying the tail position of the arrow on the
      figure.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  fig=fig
)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-1',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param2 = {
  name: 'head_position',
  description: (
    <p>
      Array-like of length 2 specifying the head position of the arrow on the
      figure.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  fig=fig
)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-1',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param3 = {
  name: 'radius',
  description: <p>Curvature of the arrow (default to 0.1).</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  radius=0.5,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'tuto-drawarrow-1-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param4 = {
  name: 'color',
  description: <p>Color of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  color='red',
  fig=fig
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-2-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param5 = {
  name: 'tail_width',
  description: <p>Width of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  tail_width=15,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-4-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param6 = {
  name: 'head_width',
  description: <p>Width of the head of the arrow.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  head_width=50,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      Specify a value generally between 1 and 50 to modify the width of the head
      of your arrow.
    </p>
  ),
  img: 'tuto-drawarrow-5-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param7 = {
  name: 'head_length',
  description: <p>Length of the head of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  head_length=50,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-6-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param8 = {
  name: 'hatch',
  description: <p>Symbol of the pattern to fill the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(dpi=150, figsize=(10,10))
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  hatch='*',
  mutation_scale=20,
  edgecolor='red',
  facecolor='black',
  fig=fig
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      <a href="/matplotlib">Matplotlib</a> offers a variety of patterns:{' '}
      <code>/</code>,<code>\\</code>, <code>|</code>, <code>-</code>,{' '}
      <code>+</code>, <code>x</code>, <code>o</code>, <code>O</code>,{' '}
      <code>.</code>, <code>*</code> that you can choose from.
    </p>
  ),
  img: 'tuto-drawarrow-7-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param9 = {
  name: 'mutation_scale',
  description: <p>Value used to scale the entire arrow (head and body)</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(dpi=150, figsize=(10,10))

fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  mutation_scale=2,
  fig=fig
)

fig_arrow(
  tail_position=[0.2, 0.3],
  head_position=[0.6, 0.8],
  mutation_scale=10,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This argument makes easier to change the size of the arrow by multiplying
      all style properties by its value. If <code>mutation_scale=4</code>, the
      arrow will be 4 times larger.
    </p>
  ),
  img: 'tuto-drawarrow-8-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param10 = {
  name: 'alpha',
  description: <p>Opacity of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(dpi=150, figsize=(10,10))

fig_arrow(
  tail_position=[0.2, 0.3],
  head_position=[0.6, 0.8],
  mutation_scale=10,
  alpha=0.5,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This argument must be between 0 (completely transparent) and 1 (perfectly
      opaque, default value).
    </p>
  ),
  img: 'tuto-drawarrow-9-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param11 = {
  name: 'invert',
  description: <p>Whether to invert to direction of the row</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(dpi=150, figsize=(10,10))

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  mutation_scale=3,
  radius=0.4,
  fig=fig
)

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  mutation_scale=3,
  radius=0.4,
  invert=True,
  fig=fig
)

plt.show()
`.trim(),
  type: 'bool',
  howToUse: (
    <p>
      The default value is <code>False</code> and the value <code>True</code>{' '}
      modifies the direction of curvature of the arrow.
    </p>
  ),
  img: 'tuto-drawarrow-10-square',
  post: 'drawarrow#Custom',
};

export const fig_arrow = {
  name,
  description,
  docUrl,
  parameters: [
    param1,
    param2,
    param3,
    param4,
    param5,
    param6,
    param7,
    param8,
    param9,
    param10,
    param11,
  ],
};