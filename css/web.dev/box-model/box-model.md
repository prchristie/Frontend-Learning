# Box model
* Everything displayed by CSS is a box
* Things that appear as a circle are really a box with some attributes

## Content and sizing
* The boxes look and behave differently based on attributes on them
* They can contain more boxes, text, imgs, etc.
  * Content effects the size of the box inherently
  * Extrinsic sizing = setting width + height, etc
  * Intrinsic sizing = let browser set the size based on content
* Overflow = content goes outside of parents bounding box.
  * Happens with extrinsic sizing.
  * Control what happens with `overflow` property

## Areas of the box model
![Alt text](./box-model.svg)
* Elements sizing made up of 4 components
  1. Content
  2. Padding
  3. Border
  4. Margin
* Padding pushes content in from its border
  * Padding is still in the elements box
* Margin pushing things away
  * Margin is out of the box>?
  * Things that go outside the box will occupy the margin
    * IE outline, box-shadow

## Controlling the box model
* Every browser applies its own base custom CSS
  * This is why some things already have margins and what not
  * This is where defaults are set as well
* Every box has a box-sizing attribute
  * Decides how to calculate size
  * Default = `box-sizing: content-box`
    * Means size setting attributes EG `width`/`height` apply to the content box
    * Means that adding `padding`, `border`, `margin`, etc will add to content box size