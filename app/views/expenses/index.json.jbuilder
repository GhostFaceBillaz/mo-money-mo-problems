json.array! @expenses.each do |expense|
  json.description    expense.description
  json.amount         expense.amount
  json.deducted_from  expense.deducted_from
  json.date           expense.date
