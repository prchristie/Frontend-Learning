# The Box Model
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

## Block and inline boxes
* Boxes have an inner and outer display type
  * The display type affects how the box interacts with the page
  * `block` and `inline`  are types of display

### Outer display type
* If box has display type = `block`
  * Box breaks onto new line if cant fit
  * Width and height are respected??
  * Padding/margin/border causes other boxes to move away
  * The box will fill its container width
* If has display type=`inline`
  * Box wont break onto new line
  * Width and height doesnt apply
  * Vertical padding/margin/border won't cause other inline boxes to move
  * Horizontal will apply

### inner display type
* The type of things that display affects inside the container
  * Ex. `display='flex'` causes direct children to become flex items