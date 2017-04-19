let my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 5 грн!',
    bigText: 'А евро 2!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

window.ee = new EventEmitter();

let Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function() {
    return {
      visible: false
    }
  },
  readmoreClick: function(event) {
  event.preventDefault();
  this.setState({visible: true});
},
  render: function() {
    let author = this.props.data.author,
        text = this.props.data.text,
        bigText = this.props.data.bigText,
        visible = this.state.visible;
        
    return (
      <div className='article'>
        <p className='news_author'>{author}:</p>
        <p className='news_text'>{text}:</p>
        <a href='#' 
          onClick={this.readmoreClick} 
          className={'news_readmore ' + (visible ? 'none':'')}>
          Подробнее
        </a>
        <p className={'news_big-text ' + (visible ? '':'none')}>{bigText}</p>
      </div>
    )
  }
});

let News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function () {
    let data = this.props.data;
    let newsTemplate;
    
    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <Article data={item} />
        </div>
      )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
    <div className='news'>
      {newsTemplate}
      <strong className={'new_count ' + (data.length > 0 ? '':'none')}>
        Всего новостей: {data.length}
      </strong>
    </div>
    );
  }
});
  
let Add = React.createClass({
  getInitialState: function(){
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },
  componentDidMount: function(){
    let self = this;
    window.ee.addListener('News.add', function(item) {
      let nextNews = item.concat(self.state.news);
      self.setState({news: nextNews});
    });
  },
  componentWillUnmount: function() {
    window.ee.removeListener('News.add');
  },
  onBtnClickHandler: function(event) {
    event.preventDefault();
    
    let textEl = ReactDOM.findDOMNode(this.refs.text);
    
    let author = ReactDOM.findDOMNode(this.refs.author).value;
    let text = ReactDOM.findDOMNode(this.refs.text).value;

    let item = [{
      author: author,
      text: text,
      bigText: '...'
    }];

  window.ee.emit('News.add', item);
  },
  onCheckRuleClick: function(event) {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },
  onFieldChange: function(fieldName, event) {
    if (event.target.value.trim().length > 0) {
      this.setState({['' + fieldName]:false})
    } else {
      this.setState({['' + fieldName]:true})
    }
  },
  render: function(){
    let agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;
    return (
       <form className='add cf'>
        <input 
          className='add-author' 
          defaultValue=''
          placeholder='Ваше имя' 
          ref='author'
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
        />
        <textarea
          className='add_text'
          defaultValue=''
          placeholder='Текст новости'
          ref='text'
          onChange={this.onFieldChange.bind(this, 'textIsEmpty')}        
        ></textarea>
        <label className='add_checkrule'>
          <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами
        </label>
        <button 
        onClick={this.onBtnClickHandler} 
        disabled={agreeNotChecked || authorIsEmpty || textIsEmpty} 
        ref='alert_button'         
        >Добавить новость
        </button>
      </form>
    );
  }
});

let App = React.createClass({
  getInitialState: function() {
    return {
      news: my_news
    }
  },
  componentDidMount: function() {
      let self = this;
      window.ee.addListener('News.add', function(item){
      let nextNews = item.concat(self.state.news);
      self.setState({news: nextNews});
    });
  },
  componentWillUnmount: function() {
    window.ee.removeListener('News.add');
  },
  render: function() {
    return (
      <div className='app'>
        <h3>Новости</h3>
        <Add />
        <News data={this.state.news} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);