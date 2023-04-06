class Car < ApplicationRecord
  validate :add_error

  def add_error
    errors.add(:mileage)
  end

end
