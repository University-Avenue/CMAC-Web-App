class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table(:users, id: :string) do |t|
      t.string :email
      t.string :password_digest
      t.string :password_reset_token
      t.datetime :password_reset_sent_at, limit: 6

      t.timestamps
    end
  end
end
