// FizzBuzz problem
function  fizzbuzzD(num, numf, numb) {
  var __ = require('immutable');
  var __natural = __.Range(1);

  function mod0(dividend, divisor)
    {
      if (0 === (dividend % divisor)) {
        return true;
      }
    }
  function fizzbuzz(num)
    {
      if (mod0(num, numf * numb)) {
        return 'FizzBuzz';
      }
      else if (mod0(num, numf)) {
        return 'Fizz';
      }
      else if (mod0(num, numb)) {
        return 'Buzz';
      }
      else {
        return num;
      }
    }

  var __fizzbuzz = __natural.map(fizzbuzz);
  var __fizzbuzznum = __fizzbuzz.take(num);

  return __fizzbuzznum;
  //console.log(__fizzbuzznum.toArray());//calcurate and output
}

var Component = React.createClass(
{
  getInitialState: function()
  { // 表計算アプリのマス目に相当する
    return {
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined
    };
  },
  handleChangeA: function(event)
  {
    var a = event.target.value;
    this.setState({d: a * 5});
  },
  handleChangeB: function(event)
  {
    var b = event.target.value;
  },
  handleChangeC: function(event)
  {
    var c = event.target.value;
  },
  render: function()
    { // aのマス目の値を監視すると同時に
      return <div>
        <input type = "text" onChange = {this.handleChangeA} />
        <input type = "text" onChange = {this.handleChangeB} />
        <input type = "text" onChange = {this.handleChangeC} />
        <input type = "text" value = {this.state.d} />
        </div>;
    } //dのマス目はりアクティブに再計算され
});

var react1 = React.render( <Component/> , document.body);
// 宣言する。リアクティブに自動的にスクリーンに再描画される！！
