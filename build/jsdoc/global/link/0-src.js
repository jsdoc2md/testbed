/** A module. Refer to it using {@link module:foo/bar}.
 * @module foo/bar
 */

/** The built in string object. Refer to it with {@link external:String}.
 * @external String
 */

/** An event. Refer to with {@link module:foo/bar.event:MyEvent}.
 * @event module:foo/bar.event:MyEvent
 */

/** See {@link LinkClass} and [LinkClass's foo property]{@link LinkClass#foo}.
 * Also check out {@link http://www.google.com|Google} and {@link http://github.com GitHub}.
 */
function linkFunction () {}

/** A class.
 * @class */
function LinkClass () {
  /** foo property */
  this.foo = 1
}

/**
 * {@link Test1}
 * {@link
 * Test2}
 * {@link
 *  Test3}
 * {@link     Test4}
 * {@link     Test5 }
 * {@link     Test6
 * }
 * {@link     Test7
 *  }
 * {@link     Test8    }
 *
 * {@link Test9|Caption9}
 * {@link TestA|
 * CaptionA}
 * {@link TestB|
 *  CaptionB}
 * {@link TestC|    CaptionC}
 * {@link TestD|    CaptionD }
 * {@link TestE|    CaptionE
 * }
 * {@link TestF|    CaptionF
 *  }
 * {@link TestG|    CaptionG    }
 *
 * {@link TestH |CaptionH}
 * {@link TestI |
 * CaptionI}
 * {@link TestJ |
 *  CaptionJ}
 * {@link TestK |    CaptionK}
 * {@link TestL |    CaptionL }
 * {@link TestM |    CaptionM
 * }
 * {@link TestN |    CaptionN
 *  }
 * {@link TestO |    CaptionO    }
 *
 * {@link TestP Caption with long textP}
 * {@link TestQ
 * Caption with long textQ}
 * {@link TestR
 *   Caption with long textR}
 * {@link TestS     Caption with long textS}
 * {@link TestT     Caption with long textT }
 * {@link TestU     Caption with long textU
 * }
 * {@link TestV     Caption with long textV
 *  }
 * {@link TestW     Caption with long textW    }
 */
function another () {}
