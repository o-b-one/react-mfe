(self["webpackChunkfeed"] = self["webpackChunkfeed"] || []).push([[216],{

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(7664);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(7029);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Input/Input.js + 15 modules
var Input = __webpack_require__(2963);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Chip/Chip.js + 20 modules
var Chip = __webpack_require__(4891);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Card/Card.js + 3 modules
var Card = __webpack_require__(4384);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(2033);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(8734);
;// CONCATENATED MODULE: ./src/app/api/feed.service.ts
class FeedService {
  constructor() {
    this.BASE_URL = 'https://api.quotable.io/quotes';
  }
  // private ongoing: Promise<any> | null = null;
  getFeed(page = 1, limit = 20, tags) {
    // if(!this.ongoing){
    let url = `${this.BASE_URL}?page=${page}&limit=${limit}`;
    if (tags.length > 0) {
      url += '&tags=' + tags.join(',');
    }
    return fetch(url).then(r => r.json());
    // .finally(() => this.ongoing = null);
    // }
    // return this.ongoing;
  }
}
;// CONCATENATED MODULE: ./src/app/feed-page/feed-page.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const feed_page_module = ({"fact":"feed-page_fact__3IL_X"});
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/app/feed-page/feed-page.tsx







const feedService = new FeedService();

/* eslint-disable-next-line */

function FeedPage(props) {
  const [page, setPage] = (0,index_js_.useState)(1);
  const [limit, setLimit] = (0,index_js_.useState)(20);
  const [tags, setTags] = (0,index_js_.useState)([]);
  const [quotes, setQuotes] = (0,index_js_.useState)([]);
  const [searchTerm, setSearchTerm] = (0,index_js_.useState)("");
  const [inprogress, setInprogress] = (0,index_js_.useState)(false);
  let timeout;
  const hasNext = (0,index_js_.useRef)(true);
  const filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(searchTerm) || q.content.toLowerCase().includes(searchTerm));
  (0,index_js_.useEffect)(() => {
    if (page > 1 && !hasNext.current) {
      return;
    }
    setInprogress(true);
    feedService.getFeed(page, limit, tags).then(res => {
      hasNext.current = res.results.length > 0;
      return res;
    }).then(res => setQuotes(prev => page === 1 ? res.results : [...prev, ...res.results])).finally(() => {
      if (page === 1) {
        window.scrollTo(0, 0);
      }
      setInprogress(false);
    });
  }, [page, limit, tags]);
  (0,index_js_.useEffect)(() => {
    if (inprogress) {
      return;
    }
    const onScroll = e => {
      if (!inprogress && e.target.documentElement.scrollTop / (e.target.documentElement.scrollHeight / 2) > .80) {
        setPage(prev => prev + 1);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [inprogress]);
  const searchWithDebounce = (term, debounce) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchTerm(term.toLowerCase());
    }, debounce);
  };
  const toggleTag = tag => {
    if (tags.includes(tag)) {
      setTags(prev => prev.filter(t => t !== tag));
    } else {
      setTags(prev => [...prev, tag]);
    }
    setPage(1);
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: inprogress && page === 1 ? 'Loading...' : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.Z, {
          onKeyUp: e => searchWithDebounce(e.currentTarget.value, 300),
          placeholder: "Search"
        }), tags.map(tag => /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.Z, {
          label: tag,
          onClick: () => toggleTag(tag)
        }, tag)), filteredQuotes.map(q => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: feed_page_module.fact,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.Z, {
            sx: {
              minWidth: 275
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
              children: [q.tags.map(tag => /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.Z, {
                label: tag,
                onClick: () => toggleTag(tag)
              }, tag)), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("i", {
                  children: ["\"", q.content, "\""]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                sx: {
                  fontSize: 14
                },
                color: "text.secondary",
                gutterBottom: true,
                children: q.author
              })]
            })
          })
        }, q._id))]
      })
    })
  );
}
/* harmony default export */ const feed_page = (FeedPage);
;// CONCATENATED MODULE: ./src/app/app.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars




function FeedApp() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(feed_page, {})
  });
}
/* harmony default export */ const app = (FeedApp);
;// CONCATENATED MODULE: ./src/bootstrap.tsx




const root = client/* createRoot */.s(document.getElementById('root'));
root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
}));

/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(3321);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}])