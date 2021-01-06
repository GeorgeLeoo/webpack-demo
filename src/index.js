import _ from 'lodash';
import './style.css'
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log('toml.title->', toml.title); // output `TOML Example`
console.log('toml.owner.name->', toml.owner.name); // output `Tom Preston-Werner`

console.log('yaml.title->', yaml.title); // output `YAML Example`
console.log('yaml.owner.name->', yaml.owner.name); // output `Tom Preston-Werner`

console.log('json.title->', json.title); // output `JSON5 Example`
console.log('json.owner.name->', json.owner.name); // output `Tom Preston-Werner`

function component() {
	const element = document.createElement('div')

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon

  element.appendChild(myIcon)

  console.log('Data.data.xml->', Data);
  console.log('Notes.data.csv->', Notes);

	return element
}

document.body.appendChild(component())
