require 'sinatra'
require 'mysql2'

client = Mysql2::Client.new(host: 'localhost', username: 'root', database: 'SchoolSchedulingExample')
tables = client.query('SHOW TABLES', :as => :array).to_a.flatten

get '/' do
  sql = ''
  results = []
  erb :index, locals: {tables: tables, sql: sql, results: results}
end

get '/search' do
  sql = params['q']
  results = client.query(sql)
  erb :index, locals: {tables: tables, sql: sql, results: results} 
end
