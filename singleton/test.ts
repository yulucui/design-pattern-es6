import { Hunger } from './hunger';
import { Lazy } from './lazy';
//返回true 说明是同一个实例
console.log(Hunger.getInstance() == Hunger.getInstance());
console.log(Lazy.getInstance() == Lazy.getInstance());