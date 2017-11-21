import Vuex from "vuex";
import Vue from 'vue'
import util from '../util.js';
import moment from 'moment'

Vue.use(util);
import QuanJingTongSerchBg from "../components/public/QuanJingTongSerch-bg.js";
import WenTiFanKui from "../components/WenTiFanKui/WenTiFanKui.js"

Vue.use(Vuex);
//通用头部
const QJTHeader = {
  state: {
    isShowSetBg: false
  },
  mutations: {
    isShowSetBgMU(state, arg) {
      state.isShowSetBg = arg;
    }
  }
};
//全景通 顶部右侧 导航
const QuanJingTongSerch = {
  /**
   * searchModel 用户输入的搜索
   */
  state: {
    isShowTopTabs: false,
    searchModel: "",
  },
  mutations: {
    isShowTopTabsMU(state, arg) {
      state.isShowTopTabs = arg;
    },
    searchModelMU(state, arg) {
      state.searchModel = arg;
    },
    initQuanJingTongSerch(state, arg) {
      state.searchModel = '';
    }
  },
  actions: {}
};
//全景通  中间 一堆checkbox
const CheckboxList = {
  //zh_cnFirst 中文首字母
  //list-alertSearchIndex 匹配到的字符高亮  下标
  //searchLength单个组中匹配searchModel得到的个数
  state: {
    allClose: false,//ul是否全部打开
    allChecked: false,//checked是否全部打钩
    list: [
      // {
      //   typeName: '人员',
      //   total: 43,
      //   showChildren: true,
      //   titleImg: require("../assets/qjt/titleImg2.png"),
      //   list: [{name: '常住人口信息啊1', checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false},]
      // }, {
      //   typeName: '物品',
      //   total: 43,
      //   showChildren: false,
      //   titleImg: require("../assets/qjt/titleImg3.png"),
      //   list: [{name: '常住人口信息不2', checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false},]
      // }, {
      //   typeName: '物品物品',
      //   total: 43,
      //   showChildren: false,
      //   titleImg: require("../assets/qjt/titleImg3.png"),
      //   list: [{name: '常住人口信息的物品3', checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false}, {name: "暂住人口信息", checked: false}, {
      //     name: "暂住人口信息",
      //     checked: false
      //   }, {name: "暂住人口信息", checked: false},]
      // }
    ],
    listBACKUP: []//list的备份  方便初始化
  },
  getters: {
    //中文转拼音
    zh_cn_list(state, getters, rootState) {
      let list = JSON.parse(JSON.stringify(state.list));
      for (var i = 0; i < list.length; i++) {
        list[i].zh_cnFirst = "";
        list[i].zh_cn = list[i].typeName;
        for (var ii = 0; ii < list[i].typeName.length; ii++) {
          list[i].zh_cnFirst += codefans_net_CC2PY(list[i].typeName[ii]).slice(0, 1);
        }
        for (var j = 0; j < list[i].list.length; j++) {
          list[i].list[j].zh_cnFirst = "";
          list[i].list[j].zh_cn = list[i].list[j].name;
          for (var ii = 0; ii < list[i].list[j].name.length; ii++) {
            list[i].list[j].zh_cnFirst += codefans_net_CC2PY(list[i].list[j].name[ii]).slice(0, 1);
          }
        }
      }
      return list;
    },
    //        被选中的checkbox长度
    checkedLength(state, getters, rootState) {
      let length = 0;
      for (var i = 0; i < state.list.length; i++) {
        for (var j = 0; j < state.list[i].list.length; j++) {
          if (state.list[i].list[j].checked) {
            length++;
          }
        }
      }
      return length;
    },
    //  过滤 用户输入后的list
    listBySearch(state, getters, rootState) {
      let list = JSON.parse(JSON.stringify(getters.zh_cn_list)), searchModel = rootState.QuanJingTongSerch.searchModel;
      //未输入  返回全部
      if (!searchModel) {
        return JSON.parse(JSON.stringify(state.list));
      }
      let reg1 = new RegExp('^[\u4e00-\u9fa5]+$'),
        reg2 = new RegExp('^[a-zA-Z]+$'),
        reg3 = new RegExp('^[0-9]+$');
      //中文
      var testReg;
      if (reg1.test(searchModel)) {
        console.log('中文');
        testReg = 'zh_cn';

      } else if (reg2.test(searchModel)) {
        console.log('字母');
        searchModel = searchModel.toLocaleUpperCase();
        testReg = 'zh_cnFirst';
      } else if (reg3.test(searchModel)) {
        console.log('数字');
        testReg = 'zh_cn';
      } else {
        console.log('组合');
        testReg = 'zh_cn';
      }
      for (var i = 0; i < list.length; i++) {
        var index_indexof = list[i][testReg].indexOf(searchModel);
        if (index_indexof !== -1) {
          list[i].alertSearchIndex = index_indexof + ',' + (searchModel.length);
        } else {
        }
        //记录自己有多少个匹配到的  ==0 showChildren=true
        var length = 0;
        for (var j = 0; j < list[i].list.length; j++) {
          //如果父级是true,自己全部展示
          list[i].list[j].hidden = false;
          var index_of = list[i].list[j][testReg].indexOf(searchModel);
          if (index_of !== -1) {
            list[i].list[j].alertSearchIndex = index_of + ',' + (searchModel.length)
            length++;
          } else if (index_of === -1) {
            list[i].list[j].hidden = true;
          }
        }
        list[i].searchLength = length;
      }
      return list;
    },
    listBySearchCheckedLength(state, getters, rootState) {
      let length = 0;
      for (let i = 0; i < getters.listBySearch.length; i++) {
        for (let j = 0; j < getters.listBySearch[i].list.length; j++) {
          if (!getters.listBySearch[i].list[j].hidden) {
            length++;
          }
        }
      }
      return length
    }
  },
  mutations: {
    CheckboxListMU(state, arg) {
      state.list = JSON.parse(JSON.stringify(arg));
    },
    CheckboxListBACKUPMU(state, arg) {
      state.listBACKUP = JSON.parse(JSON.stringify(arg));
    },
    toggleOneList(state) {
      var list = state.list;
      for (var i = 0, num = 0; i < list.length; i++) {
        if (!list[i].showChildren) {
          num++;
        }
      }
      state.allClose = num === list.length ? true : false;
    },
    /**
     * 展开所有
     * @param state
     */
    toggleAllList: function (state) {
      var list = state.list;
      for (var i = 0; i < list.length; i++) {
        list[i].showChildren = state.allClose;
      }
      state.allClose = !state.allClose
    },
    initCheckboxList(state) {
      state.allChecked = false;
      state.list = [];
      state.listBACKUP = [];
    }
  },
  actions: {
    /**
     * 初始化 tree树的结构
     * @param store
     * @param arg
     */
    initTreeList(store, arg) {
      store.state.list = JSON.parse(JSON.stringify(store.state.listBACKUP));
    },
    ajaxTreeList({state, commit, rootState}, arg) {
      ajaxCore.ajax(config.getSelectTree, null, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }).done((res) => {
        if (res.status == "10001") {
          var reslist = res.result, list = [];
          //response的数据格式变成我自己的
          reslist.map((item1, index1) => {
            list[index1] = {};
            list[index1].id = reslist[index1].num;
            list[index1].typeName = reslist[index1].name;
            list[index1].showChildren = true;
            list[index1].titleImg = item1.iconUrl;
            list[index1].list = [];
            reslist[index1].data.map((item2, index2) => {
              list[index1].list[index2] = {};
              list[index1].list[index2].name = reslist[index1].data[index2].name;
              list[index1].list[index2].id = reslist[index1].data[index2].id;
              list[index1].list[index2].checked = false;
              list[index1].list[index2].count = -1;


            })
          });
          state.list = list;
          state.listBACKUP = JSON.parse(JSON.stringify(list));
          //缓存数据
          Storage.set('CheckboxListBACKUPMU', state.list);
          //给所有全选
          store.dispatch('toggleAllChk', true)
        } else {
          layer.alert(res.desc)
        }
      })
    },
    /**
     * 改变所有打勾状态
     * @param store
     * @param arg
     */
    toggleAllChk: function (store, bool) {
      var listOrigin = store.state.list;
      var list = store.getters.listBySearch;
      for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].list.length; j++) {
          //this.$set(list[i].list[j], 'checked', !state.allChecked);
          if (store.rootState.QuanJingTongSerch.searchModel) {
            if (list[i].list[j].alertSearchIndex) {
              listOrigin[i].list[j].checked = bool
            } else {
              listOrigin[i].list[j].checked = false
            }
          } else {
            listOrigin[i].list[j].checked = bool
          }
        }
      }
      // if (!store.state.allChecked)
      //   $(".top input:checkbox").prop("checked", !store.state.allChecked);
      // else
      //   $(".top input:checkbox").removeProp("checked");
      store.state.allChecked = !store.state.allChecked;
      // state.list = list
    },
    /**
     * 改变一个组的全选状态
     * arg={checked:  ,  number:组序号  }
     * @param store
     * @param arg
     */
    toggleOnePartChecked(store, arg) {
      var listOrigin = store.state.list[arg.number];
      var list = store.getters.listBySearch[arg.number];
      for (var i = 0; i < list.list.length; i++) {
        if (store.rootState.QuanJingTongSerch.searchModel) {
          if (list.list[i].alertSearchIndex) {
            listOrigin.list[i].checked = arg.checked;
          } else {
            listOrigin.list[i].checked = false;
          }
        } else {
          listOrigin.list[i].checked = arg.checked;
        }
      }
      // if (!store.state.allChecked)
      //   $(".top input:checkbox").prop("checked", !store.state.allChecked);
      // else
      //   $(".top input:checkbox").removeProp("checked");
      // state.list = list
    }
  }
};

//全警通结果  左侧列表
const QuanJingTongResultMenu = {
  state: {
    menuList: Storage.get('search'),
    searchInput: Storage.get('searchInput'),
    newkeyword: Storage.get('newkeyword'),//二次搜索
    // menuListShowIndex: ""//左侧列表显示项
  },
  mutations: {
    menuListMU(state, arg) {
      state.menuList = arg;
      if (arg) {
        Storage.set('search', arg)
      }
    },
    searchInputMU(state, arg) {
      state.searchInput = arg;
    },
    newkeywordMU(state, arg) {
      state.newkeyword = arg
    }
  },
  actions: {
    ajaxTableCount(store, arg) {
      // ajaxCore.ajax(config.getSelectTree, null, "GET", {
      //   Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      // }).done((res) => {
      //   if (res.status == "10001") {
      //     var reslist = res.result, list = [];
      //     //response的数据格式变成我自己的
      //     reslist.map((item1, index1) => {
      //       list[index1] = {};
      //       list[index1].id = reslist[index1].num;
      //       list[index1].typeName = reslist[index1].name;
      //       list[index1].showChildren = true;
      //       list[index1].titleImg = require("../assets/qjt/titleImg2.png");
      //       list[index1].list = [];
      //       reslist[index1].data.map((item2, index2) => {
      //         list[index1].list[index2] = {};
      //         list[index1].list[index2].name = reslist[index1].data[index2].name;
      //         list[index1].list[index2].id = reslist[index1].data[index2].id;
      //         list[index1].list[index2].checked = false;
      //
      //       })
      //     });
      //     state.list = list;
      //     state.listBACKUP=JSON.parse(JSON.stringify(list))
      //   }else{
      //
      //   }
      // })
    },
    menuListShowIndexMU(store, arg) {
      // store.state.menuListShowIndex = arg;
      // store.dispatch('tabsRightListAC', arg);
    }
  }
};
//全警通结果 右侧搜索列表
const ResultRight = {
  state: {
    rightShowIndex: {},//右侧搜索的头部正在显示哪个
    rightShowBoxAjaxRequest: [],//右侧搜索列表对应相关数据  固定格式 pageSize pageNum total
    rightShowBoxAjaxResponse: []//上面是 请求  这个对应的 返回  多少个tabs,多少个list
  },
  mutations: {
    rightShowIndexMU(state, arg) {
      state.rightShowIndex = arg;
    },
    rightShowBoxAjaxRequestMU(state, arg) {
      state.rightShowBoxAjaxRequest = arg;
    },
    rightShowBoxAjaxResponseMU(state, arg) {
      state.rightShowBoxAjaxResponse = arg;
    },

  },
  actions: {
    /**
     * 右侧搜索列表正在显示哪个
     * @param store
     * @param arg
     */
    rightShowIndexMU(store, arg) {
      store.state.rightShowIndex = arg;
      let rightShowBoxAjaxRequest = store.state.rightShowBoxAjaxRequest;
      //由rightShowIndex检查是否ajax回掉完整
      for (let i = 0; i < rightShowBoxAjaxRequest.length; i++) {
        if (rightShowBoxAjaxRequest[i].TableId == arg.id) {
          if (!store.state.rightShowBoxAjaxResponse[i]) {
            store.dispatch('ajaxRightShowBoxModelByComSelfAC', rightShowBoxAjaxRequest[i])
          }
          break;
        }
      }
      store.dispatch('storageResultRight');
    },
    /**
     * 切换tabs(新创建),数据也要跟着请求刷新
     * @param store
     * @param arg
     */
    ajaxRightShowBoxModelAC(store, arg) {
      let rightShowBoxAjaxRequest = store.state.rightShowBoxAjaxRequest;
      let rightShowBoxAjaxResponse = JSON.parse(JSON.stringify(store.state.rightShowBoxAjaxResponse));
      //记录请求状态
      Vue.prototype.geCanQuery(store.rootState.QuanJingTongResultMenu.searchInput).then((res1) => {
        if (res1.status == 10001) {
          rightShowBoxAjaxRequest.push({
            keyword: store.rootState.QuanJingTongResultMenu.searchInput,
            newkeyword: "",
            TableId: arg.id,
            pageSize: 15,
            currentPage: 1,
            total: 0,
            starttime: "",
            endtime: "",
            tableName: arg.name,
            tabIndex: rightShowBoxAjaxRequest.length
          });
          let ob = rightShowBoxAjaxRequest[rightShowBoxAjaxRequest.length - 1];
          let currentTabsIndex = rightShowBoxAjaxRequest.length - 1;
          // console.log(ob);
          ajaxCore.ajax(config.searchRightOneTableInfo, ob, "POST", {
            Authorization: BASE64.encode(getRandom6() + ':' + getToken())
          }, rightShowBoxAjaxRequest.length === 1).done((res) => {
            if (res.status == "10001") {
              rightShowBoxAjaxResponse[currentTabsIndex] = res.result;
              ob.total = res.result.dataCount;
              store.state.rightShowBoxAjaxResponse=rightShowBoxAjaxResponse;
              store.dispatch('storageResultRight');
            } else {
              layer.alert(res.desc)
            }
          })
        }
      });

    },
    /**
     * 组件里面参数变化  刷新请求
     */
    ajaxRightShowBoxModelByComSelfAC(store, arg) {
      Vue.prototype.geCanQuery(arg.newkeyword).then((res) => {
        if (res.status == '10001') {
          store.state.rightShowBoxAjaxRequest[arg.tabIndex] = $.extend(store.state.rightShowBoxAjaxRequest[arg.tabIndex], arg);
          let ob = $.extend(store.state.rightShowBoxAjaxRequest[arg.tabIndex], arg);
          if (ob.starttime) {
            ob.starttime = moment(ob.starttime).format('YYYY-MM-DD hh:mm:ss')
          }
          if (ob.endtime) {
            ob.starttime = moment(ob.endtime).format('YYYY-MM-DD hh:mm:ss')
          }
          ajaxCore.ajax(config.searchRightOneTableInfo, ob, "POST", {
            Authorization: BASE64.encode(getRandom6() + ':' + getToken())
          }).done((res) => {
            if (res.status == "10001") {
              let rightShowBoxAjaxResponse = JSON.parse(JSON.stringify(store.state.rightShowBoxAjaxResponse));
              rightShowBoxAjaxResponse[arg.tabIndex] = res.result;
              store.state.rightShowBoxAjaxResponse = rightShowBoxAjaxResponse;
              let rightShowBoxAjaxRequest = JSON.parse(JSON.stringify(store.state.rightShowBoxAjaxRequest));
              rightShowBoxAjaxRequest[arg.tabIndex].total = res.result.dataCount;
              store.state.rightShowBoxAjaxRequest = rightShowBoxAjaxRequest;
              store.dispatch('storageResultRight');
            } else {

            }
          })
        }
      });

    },
    /**
     * 触发保存本地缓存
     */
    storageResultRight(store, arg) {
      Storage.set('ResultRight', {
        rightShowIndex: store.state.rightShowIndex,
        rightShowBoxAjaxRequest: store.state.rightShowBoxAjaxRequest,
        rightShowBoxAjaxResponse: store.state.rightShowBoxAjaxResponse,
        tabsRightList: store.rootState.QuanJingTongResult.tabsRightList
      });
    },
    /**
     *
     **/
    clearStorageResultRight() {
      Storage.remove('ResultRight');
    },
    /**
     * 恢复本地缓存
     * 如果Request.length>Response.length,说明有ajax还没成功
     */
    storageResultRightBackUp(store, arg) {
      let ResultRight = Storage.get('ResultRight');
      store.state.rightShowIndex = ResultRight.rightShowIndex;
      store.state.rightShowBoxAjaxRequest = ResultRight.rightShowBoxAjaxRequest;
      store.state.rightShowBoxAjaxResponse = ResultRight.rightShowBoxAjaxResponse;
      store.rootState.QuanJingTongResult.tabsRightList = ResultRight.tabsRightList;
      if (store.state.rightShowBoxAjaxRequest.length > store.state.rightShowBoxAjaxResponse.length) {
        for (let i = store.state.rightShowBoxAjaxResponse.length; i < store.state.rightShowBoxAjaxRequest.length; i++) {
          store.dispatch('ajaxRightShowBoxModelByComSelfAC', store.state.rightShowBoxAjaxRequest[i])
        }
      }
    },
    //清空搜索记录
    initResultRight(store) {
      store.state.rightShowIndex = {};
      store.state.rightShowBoxAjaxRequest = [];
      store.state.rightShowBoxAjaxResponse = [];
      store.rootState.QuanJingTongResult.tabsRightList = [];

    }
  }
};
//全警通个人详细信息
const PersonDetail = {
  state: {
    personId: "",//当前正在显示谁?
    personShowModel: "",//妈的 信息请求要调3个接口
    personShowModel2: "",
    personShowModel3: "",
    personFlag: "",//一堆flag标识
  },
  mutations: {
    initPersonDetailMU(state, arg) {
      state.personId = '';
      state.personShowModel = '';
      state.personShowModel2 = '';
      state.personShowModel3 = '';
      state.personFlag = '';
    }
  },
  actions: {
    /**
     * arg为空表示影藏个人信息,有值表示ajax
     * @param store
     * @param arg
     */
    ajaxShowPersonIdAC(store, arg) {
      store.state.personId = arg;
      if (arg) {
        ajaxCore.ajax(config.searchDetailInfo, {
          id: arg.id,
          tablename: arg.tableId
        }, "GET", {
          Authorization: BASE64.encode(getRandom6() + ':' + getToken())
        }).done((res) => {
          if (res.status == "10001") {
            store.state.personShowModel = res.result.data;
            store.state.personFlag = res.flag;
            for (let i = 0; i < store.state.personShowModel.length; i++) {
              if (store.state.personShowModel[i].colname == store.state.personFlag.sfz[0] && store.state.personShowModel[i].value) {
                for (let j = 0; j < store.state.personShowModel.length; j++) {
                  //用sfz和glbh查照片
                  if (store.state.personShowModel[j].colname == store.state.personFlag.glbh[0] || j === store.state.personShowModel.length - 1) {
                    store.dispatch('ajaxShowPersonIdAC2', $.extend(arg, {
                      CardId: store.state.personShowModel[i].value,
                      glbh: (j === store.state.personShowModel.length - 1 && store.state.personShowModel[j].colname != store.state.personFlag.glbh[0]) ? '' : store.state.personShowModel[j].value,
                      tableId: arg.tableId
                    }));
                  }
                }
                break;
              }
            }
          } else {
            layer.alert(res.desc);
          }
        });
      } else {
        store.state.personShowModel = '';
        store.state.personShowModel2 = '';
        store.state.personShowModel3 = '';
      }
    }
    /**
     * 下面2个接口都要用sfhm的，但是sfhm可能要在上一个接口中的flag
     **/
    , ajaxShowPersonIdAC2(store, arg) {
      // ajaxCore.ajax(config.searchPersonInfo, {
      //   CardId: arg.CardId,
      //   tablenames: arg.tableId
      // }, "GET", {
      //   Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      // }).done((res) => {
      //   if (res.status == "10001") {
      //     store.state.personShowModel2 = res.result;
      //   } else {
      //     layer.alert(res.desc);
      //   }
      // });
      ajaxCore.ajax(config.getCardPhotos, {
        sfz: arg.CardId,
        glbh: arg.glbh,
        tableid: arg.tableId
      }, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }).done((res) => {
        if (res.status == "10001") {
          store.state.personShowModel3 = res.result;
        } else {
          layer.alert(res.desc);
        }
      })
    }
  }


};
//关系图谱
const GuanXiTuPu = {
  state: {
    CardId: "",//身份证
    searchRelation: "",//关系图谱
    searchPersonInfo: "",//获取个人信息(关系图中简略信息)
    searchHistorical: "",//历史轨迹
    searchPersonZDBQ: ""//重点标签

  },
  mutations: {
    initSearchRelation(state, arg) {
      state.CardId = '';
      state.searchRelation = '';
    },
    initSearchPersonInfo(state, arg) {
      state.searchPersonInfo = '';
      state.searchPersonZDBQ = '';
    },
    initSearchHistorical(state, arg) {
      state.searchHistorical = '';
    },
  },
  actions: {
    //根据CardId 和 checkbox的SearchType打钩情况 请求关系图谱
    ajaxGuanXiTuPuByCardIdAC(store, arg) {
      store.state.CardId = arg.CardId;
      return Promise.all([
        new Promise((resolve, reject) => {
          ajaxCore.ajax(config.searchRelation, {
            CardId: arg.CardId,
            SearchType: arg.SearchType1.join(','),
            timePeriod: arg.timePeriod1,
          }, "POST", {
            Authorization: BASE64.encode(getRandom6() + ':' + getToken())
          }).done((res) => {
            resolve(res);
            if (res.status == "10001") {
              store.state.searchRelation = res.result;
              //查关系人的照片
              for (let i = 0; i < res.result.relationPersonnel.length; i++) {
                store.dispatch('ajaxPersonsPicAC', {
                  CardId: res.result.relationPersonnel[i].cardId,
                  index: i
                })
              }
              //查当前人的照片
              store.dispatch('ajaxCurrentPersonPicAC', {
                CardId: res.result.cardId,
              });
              Bus.$emit('GuanXiTuPu-render');
            } else {
              layer.alert(res.desc);
            }
          });
        }),
        new Promise((resolve, reject) => {
          ajaxCore.ajax(config.searchPersonInfo, {
            CardId: arg.CardId,
            tablenames: arg.tableId
          }, "GET", {
            Authorization: BASE64.encode(getRandom6() + ':' + getToken())
          }).done((res) => {
            resolve(res);
            if (res.status == "10001") {
              store.state.searchPersonInfo = res.result;
            } else {
              layer.alert(res.desc);
            }
          });
        })
      ]);

    },
    //根据CardId 和 checkbox的SearchType打钩情况 请求历史轨迹
    ajaxLiShiGuiJiByCardIdAc(store, arg) {
      ajaxCore.ajax(config.searchHistorical, {
        CardId: arg.CardId,
        SearchType: arg.SearchType2.join(','),
        timePeriod: arg.timePeriod2,
      }, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }, true, null, true).done((res) => {
        if (res.status == "10001") {
          store.state.searchHistorical = res.result;
        } else {
        }
      })
    },
    /**
     * 重点人员标签
     * */
    ajaxSearchPersonZDBQAC(store, arg) {
      ajaxCore.ajax(config.searchPersonZDBQ, {
        idcard: arg.sfhm,
      }, "POST", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }).done((res) => {
        if (res.status == "10001") {
          store.state.searchPersonZDBQ = res.result;
        } else {
          layer.alert(res.desc);
        }
      })
    },
    /**
     * 不停地调人员图片
     * */
    ajaxPersonsPicAC(store, arg) {
      ajaxCore.ajax(config.getCardPhotos, {
        sfz: arg.CardId
      }, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }, true).done((res) => {
        if (res.status == "10001") {
          store.state.searchRelation.relationPersonnel[arg.index].imgUrl = res.result[0];
        } else {
        }
      })
    },
    /**
     * 查当前人的身份证
     */
    ajaxCurrentPersonPicAC(store, arg) {
      ajaxCore.ajax(config.getCardPhotos, {
        sfz: arg.CardId
      }, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }, true).done((res) => {
        if (res.status == "10001") {
          store.state.searchRelation.imgUrl = res.result[0];
        } else {
        }
      })
    }
  }
};
//关联对比
const GuanLianDuiBi = {
  state: {
    personCompareDetail1: "",
    searchKeyDetail: "",//关联比对ajax
    searchKeyDetailTIMES: 0,//总共调用次数
    random2GuAnLianDuiBi: Storage.get('random2'),
    TIMEOUT: "",
    abortAjax: false,//停止ajax
    layerIndex: ""
  },
  mutations: {
    searchKeyDetailMU(state, arg) {
      state.searchKeyDetail = arg;
    },
    random2GuAnLianDuiBiMU(state, arg) {
      state.random2GuAnLianDuiBi = arg;
      Storage.set('random2GuAnLianDuiBi', arg);
    },
    initGuanLianDuiBi(state, arg) {
      state.searchKeyDetail = '';
      state.personCompareDetail1 = '';
      state.searchKeyDetailTIMES = 0;
      state.abortAjax = false;
      state.random2GuAnLianDuiBi = '';
      Storage.remove('random2GuAnLianDuiBi');

    },
    abortAjaxGuanLianDuiBiMU(state, arg) {
      state.abortAjax = arg;
    }
  },
  actions: {
    /**
     * 关联对比请求信息  里面value是—1，继续请求
     * @param store
     * @param arg
     */
    ajaxPersonCompareDetail1AC(store, arg) {
      if (store.state.abortAjax) {
        return
      }
      if (store.searchKeyDetailTIMES > 3) {
        store.searchKeyDetailTIMES = 0;
        return
      }
      store.searchKeyDetailTIMES++;
      if (store.state.random2GuAnLianDuiBi === null) {
        store.commit('random2GuAnLianDuiBiMU', new Date().getTime());
      }
      if (store.state.TIMEOUT) {
        clearTimeout(store.state.TIMEOUT);
      }
      store.state.layerIndex = layer.load(0);
      store.state.TIMEOUT = setTimeout(() => {
        ajaxCore.ajax(config.searchKeyDetail, {
          keyWord: arg.keyWord,
          keyType: arg.keyType,
          random: store.state.random2GuAnLianDuiBi,
          end: false
        }, "POST", {
          Authorization: BASE64.encode(getRandom6() + ':' + getToken())
        }, true).done((res) => {
          if (res.status == "10001") {
            store.state.searchKeyDetail = res.result;
            for (let i = 0; i < res.result.length; i++) {
              for (let j = 0; j < res.result[i].data.length; j++) {
                if (res.result[i].data[j].value == '-1') {
                  store.dispatch('ajaxPersonCompareDetail1AC', arg);
                  return;
                }
              }
            }
            layer.close(store.state.layerIndex);
            store.dispatch('ajaxajaxPersonCompareDetail1ACEND', $.extend(arg, {end: true}));
            store.commit('random2GuAnLianDuiBiMU', null);
            store.searchKeyDetailTIMES = 0;
          } else {
            layer.alert(res.desc);
          }
        });
      }, store.state.TIMEOUT === '' ? 0 : 1000)

    },
    /**
     * 上面ajax循环结束后再调一次结束
     * @param store
     * @param arg
     */
    ajaxajaxPersonCompareDetail1ACEND(store, arg) {
      ajaxCore.ajax(config.searchKeyDetail, {
        keyWord: arg.keyWord,
        keyType: arg.keyType,
        random: store.state.random2GuAnLianDuiBi,
        end: true
      }, "POST", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }).done((res) => {
      })
    }
  }
};
// 同行分析
const TongXingFengXi = {
  state: {
    searchPeerInterface: ""//同行界面接口
  },
  mutations: {
    initTongXingFengXi(state, arg) {
      state.searchPeerInterface = '';
    }
  },
  actions: {
    /**
     * 请求同行数据
     * @param store
     * @param arg
     */
    ajaxSearchPeerInterfaceAC(store, arg) {
      ajaxCore.ajax(config.searchPeerInterface, {
        CardId: arg.CardId,
        SearchType: arg.SearchType.join(','),
        Sex: arg.Sex,
        Address: arg.Address,
        age: arg.age,
        // type: arg.type
        timePeriod: 4
      }, "POST", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }).done((res) => {
        if (res.status == "10001") {
          store.state.searchPeerInterface = res.result;
          for (let i = 0; i < res.result.length; i++) {
            store.dispatch('ajaxGuanLianDuiBiPersonPicAC', {
              CardId: res.result[i].CardId,
              index: i
            })
          }
        } else {
          layer.alert(res.desc);
        }
      });
    },
    /**
     * 不停地调人员照片
     */
    ajaxGuanLianDuiBiPersonPicAC(store, arg) {
      ajaxCore.ajax(config.getCardPhotos, {
        sfz: arg.CardId
      }, "GET", {
        Authorization: BASE64.encode(getRandom6() + ':' + getToken())
      }, true).done((res) => {
        if (res.status == "10001") {
          store.state.searchPeerInterface[arg.index].imgUrl = res.result[0];
        } else {
        }
      })
    }
  }
};
//全景通结果页
const QuanJingTongResult = {
  state: {
    tabsFilters: "",
    tabsRightList: [],//右侧头部tabs
    menuList: [
      {
        title: "人员",
        sublist: [
          {
            title: "常住人口信息",
            id: 10001,
          },
          {
            title: "涉毒人员信息",
            id: 10002,
          },
          {
            title: "指纹信息",
            id: 10003,
          },
          {
            title: "驾驶员信息",
            id: 10004,
          }, {
            title: "暂住人口信息",
            id: 10005,
          }, {
            title: "违法犯罪人员信息",
            id: 10006,
          },
          {
            title: "关系人口信息",
            id: 10007,
          },
          {
            title: "人员要素信息",
            id: 10008,
          },
          {
            title: "常住人口信息",
            id: 10009,
          },
          {
            title: "涉毒人员信息",
            id: 10010,
          },
          {
            title: "指纹信息",
            id: 10011,
          },
          {
            title: "驾驶员信息",
            id: 10012,
          }, {
            title: "暂住人口信息",
            id: 10013,
          }, {
            title: "违法犯罪人员信息",
            id: 10014,
          },
          {
            title: "关系人口信息",
            id: 10015,
          },
          {
            title: "人员要素信息",
            id: 10016,
          },
        ]
      },
      {
        title: "物品",
        sublist: [
          {
            title: "在逃人口信息",
            id: 20001,
          },
          {
            title: "嫌疑人员信息",
            id: 20002,
          },
          {
            title: "戒毒所人员信息",
            id: 20003,
          }
        ]
      },
      {
        title: "轨迹",
        sublist: [
          {
            title: "轨迹1-1",
            id: 20001,
          },
          {
            title: "轨迹1-2",
            id: 20002,
          },
          {
            title: "轨迹1-3",
            id: 20003,
          }
        ]
      },
      {
        title: "轨迹",
        sublist: [
          {
            title: "轨迹2-1",
            id: 20001,
          },
          {
            title: "轨迹2-2",
            id: 20002,
          },
          {
            title: "轨迹2-3",
            id: 20003,
          }
        ]
      }
    ],
    GuanXiTuPuCardID: ""//关系图谱的身份证
  },
  getters: {
    infoListFilterResult(state, getters, rootState) {
      let infoList = JSON.parse(JSON.stringify(state.menuList));
      let tabsFilters = state.tabsFilters.trim();
      //输入空 返回全部
      if (tabsFilters === '') {
        return infoList;
      }
      let newReg = new RegExp(tabsFilters);
      for (let i = 0; i < infoList.length; i++) {
        for (let j = 0; j < infoList[i].sublist.length; j++) {
          if (newReg.test(infoList[i].sublist[j].title)) {
            infoList[i].sublist[j].hidden = false;
          } else {
            infoList[i].sublist[j].hidden = true;
          }
        }
      }
      return infoList;
    }
  },
  mutations: {
    // tabsFiltersMU(state, arg) {
    //   state.tabsFilters = arg;
    // },
    GuanXiTuPuCardIDMU(state, arg) {
      state.GuanXiTuPuCardID = arg;
    },
    tabsRightListMU(state, arg) {
      console.log(arg);
      state.tabsRightList = arg;
    }
  },
  actions: {
    /**
     * 右侧tabs切换
     * @param store
     * @param arg
     */
    tabsRightListAC(store, arg) {
      var tabsRightList = store.state.tabsRightList;

      var bool = false;
      for (var i = 0; i < tabsRightList.length; i++) {
        //相等表示又打开同一个窗口  否则 打开新窗口,开启Ajax
        if (tabsRightList[i].id == arg.id) {
          bool = true;
          break;
        }
      }
      //新窗口  最多显示10个
      if (!bool) {
        if (tabsRightList.length >= 10) {
          layer.msg('最多打开10条');
          return false;
        }
        store.state.tabsRightList.push(arg);
        store.dispatch('ajaxRightShowBoxModelAC', arg)
      }
      //正在显示哪个
      store.dispatch('rightShowIndexMU', arg);
    },
    /**
     * 关闭一个tabs  顺便打开上一个  列表也一样
     * @param store
     * @param arg
     */
    rightTabsDeleteAC(store, arg) {
      if (store.state.tabsRightList.length > 1) {
        store.dispatch('tabsRightListAC', arg == 0 ? store.state.tabsRightList[1] : store.state.tabsRightList[arg - 1]);
        store.rootState.ResultRight.rightShowBoxAjaxRequest.splice(arg, 1);
        store.rootState.ResultRight.rightShowBoxAjaxResponse.splice(arg, 1);
        store.state.tabsRightList.splice(arg, 1);
        store.dispatch('storageResultRight');
      }
    }
  }
};

const store = new Vuex.Store({
  modules: {
    QuanJingTongSerch: QuanJingTongSerch,
    CheckboxList: CheckboxList,
    PersonDetail,
    QuanJingTongSerchBg,
    QuanJingTongResultMenu,
    QuanJingTongResult, ResultRight, GuanXiTuPu, GuanLianDuiBi, TongXingFengXi, QJTHeader, WenTiFanKui
  },
  state: {
    mainBg: "",
    windowWidth: "",
    windowHeight: "",
    loginResult: Storage.get('loginresult'),
  },
  mutations: {
    windowWidthMU(state, arg) {
      state.windowWidth = arg;
    },
    windowHeightMU(state, arg) {
      state.windowHeight = arg;
    },
    loginResultMU(state, arg) {
      state.loginResult = arg;
    },
    /**
     * 设置loginResult的isShow 1 并缓存
     * @param state
     * @param arg
     */
    setLoginResultIsShow(state, arg) {
      state.loginResult.isShow = arg;
      Storage.set('loginresult', state.loginResult)
    },
    /**
     * 设置loginResult的question 1 并缓存
     * @param state
     * @param arg
     */
    setLoginResultuestion(state, arg) {
      state.loginResult.question = arg;
      Storage.set('loginresult', state.loginResult)
    }
  },
  getters: {
    /**
     * 水印文字
     * @param state
     * @param getters
     */
    watermark_txt(state, getters) {
      if (state.loginResult) {
        let str = state.loginResult.userName + ' (' + state.loginResult.loginName + ') ' + new moment().format('YYYY-MM-DD');
        return str;
      } else {
        return false
      }

    }
  },
  actions: {}
});

export default store;

