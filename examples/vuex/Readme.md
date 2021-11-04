
En el caso de este ejemplo

```javascript
const store = new Vuex.Store({
  state: {
    user: {name: null, email: "email@email.com"}
  },
  getters: {
    userName: state => {
      return state.user.name
    },
    userEmail: state => {
      return state.user.email
    }
  },
  mutations: {
    newUser (state, payload) {
      state.user = payload
    },
    changeName (state, payload) {
      state.user.name = payload.name
    }
  }
})
```
Para las dos mutaciones si payload es `{name: "NEW_NAME", email: "email@email.com"}`

En la mutación `newUser` , vuex recalcula todos los getters.

En cambio para `changeName`, vue solo recalcula el getters `userName`
