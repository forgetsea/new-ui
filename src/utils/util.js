import {get, post} from './API';

const dummy = [
		{id: 1,title:"Fix Wall",description:"1st floor wall",costsum:500,
		costAll:[{title: "labor cost", cost: 100},
			{title:"material cost", cost:200},
			{title:"other cost", cost:200}]},
		{id: 2,title:"foooww",description:"top building",costsum:800,
		costAll:[{title: "labor cost", cost: 199},
			{title:"material cost", cost:299},
			{title:"other cost", cost:302}]},
		{id: 3,title:"parking",description:"car, tesla",costsum:1000,
		costAll:[{title: "labor cost", cost: 333},
			{title:"material cost", cost:333},
			{title:"charge cost", cost:1},
			{title:"other cost", cost:333}]},
	];

export function fetchIssue(id) {
/*	return get('/api_url/getIssueById', {
	    params: { id },
	})*/
	return [dummy[id]];
}

export function fetchIssues(params) {
/*	return get('/api_url/getAllIssues',{
		params,
	})*/
	return dummy;
	
}

export function login({ account, password }) {
  return post('/api_url/login',{ 
  	account, password
  })
}

export function createIssue(params) {
/*	return post('/api_url/createIssue',{
		params
	})*/
	return 'ok'
}

export function foo() {}