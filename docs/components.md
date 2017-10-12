# Components

### Button
A standard, styled button.

**Properties**

| name  | type | notes |
|---|---|---|
|`onClick` | function |For loading styles referenced in shared components |
|`type` | string | For loading styles referenced in shared components.  Can be `['login', 'export', 'import', 'importNew', 'logout']` |
|`className` | string **optional** | The class to apply to the button element. |

Example:
```
<Button
  onClick={this.executeThing}
  type="import"
  className={stylesheet.extraBigText}
>
  Import!
</Button>
```

### Dropdown

### Form

### Icon

### IconButton

### Modal

### Pagination

### RoundRectangle

### SquareSelect

### Table
