class AuthenticationController < ApplicationController
  def github
    authenticator = Authenticator.new
    user_info = authenticator.github(params[:code])

    login = user_info[:login]
    name = user_info[:name]

    token = TokiToki.encode(login)
    User.where(login: login).first_or_create!(
        name: name,
        login: login
    )
    redirect_to "#{issuer}?token=#{token}"
  rescue StandardError => error
    redirect_to "#{issuer}?error=#{error.message}"
  end

  private

  def issuer
    ENV['CLIENT_URL']
  end
end