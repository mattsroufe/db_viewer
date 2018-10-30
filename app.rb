require 'sinatra'
require 'mysql2'

database = 'SchoolSchedulingExample'
client = Mysql2::Client.new(host: 'localhost', username: 'root', database: database)
tables = client.query('SHOW TABLES', :as => :array).to_a.flatten

get '/' do
  sql = ''
  results = []
  erb :index, locals: {tables: tables, sql: sql, results: results, database: database}
end

get '/search' do
  sql = params['q']
  results = client.query(sql)
  erb :index, locals: {tables: tables, sql: sql, results: results, database: database}
end
