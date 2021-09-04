const { asyncScheduler, from, Observable } =  require('rxjs');
const { concatAll, map, switchMap, mergeMap } = require('rxjs/operators');
const axios = require('axios')

const observable = from(axios.get('https://api.github.com/users/rwietter/repos')).pipe(
    map(repo => repo.data),
)

observable.subscribe(function(data){
    data.map(repo => console.log(repo.full_name))
});
