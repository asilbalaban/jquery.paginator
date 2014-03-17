# jquery paginator
#### *this is a tiny plugin for paginate unordered lists*

[Click Here For Quick Demo](http://asil.me/demo/jquery-paginator)


## options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `perpage` | how many items will be shown per page. | Integer | 5 |
| `activeClass` | class name for active page on pagination list. | String | `active` |
| `addAnyway` | if this option set as true, the pagination list will be added although total number of items is smaller than the number of items per page | Boolean | false |



## example usage
*the selector must be id*

    <ul id="pagination">
        <li>İtem #1</li>
        <li>İtem #2</li>
        <li>İtem #3</li>
        <li>İtem #4</li>
        <li>İtem #5</li>
        <li>İtem #6</li>
        <li>İtem #7</li>
        <li>İtem #8</li>
        <li>İtem #9</li>
        <li>İtem #10</li>
        <li>İtem #11</li>
    </ul>
    <div class="clear"></div>

    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/jquery.paginator.js"></script>
    <script>
        $('#pagination').paginator();
    </script>

## Download

[Download](https://github.com/asilbalaban/jquery-paginator/archive/master.zip) > includes example usage
