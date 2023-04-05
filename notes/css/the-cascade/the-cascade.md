* How do competing styles work in css?
    ```css
    button {
        color: red;
    }

    button {
        color: green;
    }
    ```
    * The button will be green
* Cascade algorithm works in 4 steps
    1. Position and order of appearance
    2. Specificity
       * Which selector has the strongest match - most specific match
    3. Origin
    4. Importance

# Position and order
* The last instance of a same selector will have precedence
* This applies to having multiple css files as well.

```html
<head>
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="style2.css">
</head>
```
* Any competing styles will have style2.css apply.



# TLDR
* If something is more specific, it will use that
* The last occurrence is then the next most important