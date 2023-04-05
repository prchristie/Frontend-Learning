# Selectors

## Attribute selector
* We can select based on attribute on the html element
```css
[data-type='primary'] {
  color: red;
}

<div data-type="primary"></div>
```
* Can instead find all elements with the given attribute by;
```css
[data-type] {
    color: red;
}
```
  * This selects everything with the `data-type` attribute.
  * Can also do something similar to regex with attributes
    ```css
    /* A href that contains "example.com" */
    [href*='example.com'] {
      color: red;
    }

    /* A href that starts with https */
    [href^='https'] {
      color: green;
    }

    /* A href that ends with .com */
    [href$='.com'] {
      color: blue;
    }
    ```
    * \*=contains
    * ^=starts with
    * $=ends with

## Grouping selectors
* Can group selectors by separating with a comma
  ```css
  strong,
  em,
  .thing,
  [data='cool'] {
    color: red;
  }
  ```

## Pseudo classes and pseudo elements
* Focuses on specific platform state
  * EG
    * element is hovered
    * part of another element

### Pseudo-classes
* When something is hovered, can select that with `:hover`
  ```css
  a:hover {
    ...
  }
  ```
  * All pseudo elements use a single `:`

### Pseudo-element
* Doesn't respond to state,
  * Instead acts as if adding a new element
  * Uses a double `:` - `::`
* `::before` and `::after` are pseudo **elements**